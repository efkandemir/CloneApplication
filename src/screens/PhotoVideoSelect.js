import {
  View,
  Text,
  Modal,
  PermissionsAndroid,
  Platform,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { launchImageLibrary } from "react-native-image-picker";

const PhotoVideoSelect = () => {
  const [permissionModalVisible, setPermissionModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    checkAndRequestPermissionOnStart();
  }, []);

  const checkGalleryPermission = async () => {
    if (Platform.OS !== "android") return true;

    try {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const hasPermission = await PermissionsAndroid.check(permission);
      return hasPermission;
    } catch (err) {
      console.log("İzin kontrol hatası:", err);
      return false;
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const result = await PermissionsAndroid.request(permission, {
        title: "Medya Erişimi",
        message: "Galerinizdeki öğelere erişmek için izin gerekiyor.",
        buttonPositive: "İzin Ver",
        buttonNegative: "Reddet",
      });

      return result === PermissionsAndroid.RESULTS.GRANTED;
    } catch (e) {
      console.error("İzin isteği hatası:", e);
      return false;
    }
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log("Kullanıcı resim seçmeyi iptal etti.");
        } else if (response.errorCode) {
          console.error("Galeri hatası:", response.errorCode);
        } else {
          setSelectedImage(response.assets[0].uri);
        }
      }
    );
  };

  const checkAndRequestPermissionOnStart = async () => {
    const hasPermission = await checkGalleryPermission();
    if (hasPermission) {
      openGallery();
    } else {
      setPermissionModalVisible(true);
    }
  };

  const handleRequestPermissionAndOpenGallery = async () => {
    const granted = await requestGalleryPermission();
    setPermissionModalVisible(false);

    if (granted) {
      openGallery();
    } else {
      Alert.alert("Uyarı", "Galeri izni verilmedi.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      )}

      <Modal
        visible={permissionModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPermissionModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-xl font-bold text-gray-800 mb-2">
              İzin Gerekli
            </Text>
            <Text className="text-gray-600 mb-4">
              Galeriye erişmek için izin vermeniz gerekiyor.
            </Text>

            <View className="flex-row justify-end space-x-3">
              <Text
                className="px-4 py-2 bg-gray-200 rounded-md text-gray-800"
                onPress={() => setPermissionModalVisible(false)}
              >
                Vazgeç
              </Text>
              <Text
                className="px-4 py-2 bg-blue-500 rounded-md text-white"
                onPress={handleRequestPermissionAndOpenGallery}
              >
                İzin Ver
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhotoVideoSelect;
