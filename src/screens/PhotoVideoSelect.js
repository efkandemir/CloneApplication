import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

const PhotoVideoSelect = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    checkGalleryPermission();
  }, []);

  const checkGalleryPermission = async () => {
    if (Platform.OS !== "android") {
      setHasPermission(true);
      return;
    }

    try {
      const permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const hasPermission = await PermissionsAndroid.check(permission);
      setHasPermission(hasPermission);
    } catch (err) {
      console.log("Permission check error:", err);
      setHasPermission(false);
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

      const granted = result === PermissionsAndroid.RESULTS.GRANTED;
      setHasPermission(granted);
      return granted;
    } catch (e) {
      console.error("Permission request error:", e);
      return false;
    }
  };

  const openGallery = async () => {
    const granted = hasPermission || (await requestGalleryPermission());

    if (!granted) {
      Alert.alert("Uyarı", "Galeriye erişim izni verilmedi");
      return;
    }

    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        selectionLimit: 0,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.error("ImagePicker Error: ", response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
          const newImages = response.assets.map((asset) => asset.uri);
          setSelectedImages((prev) => [...prev, ...newImages]);
        }
      }
    );
  };

  const handleContinue = () => {
    if (selectedImages.length === 0) {
      Alert.alert("Uyarı", "Devam etmek için en az bir resim seçmelisiniz");
      return;
    }

    navigation.navigate("ContactInformation", { images: selectedImages });
  };

  const removeImage = (uri) => {
    setSelectedImages((prev) => prev.filter((imageUri) => imageUri !== uri));
  };

  return (
    <View className="flex-1 bg-white p-4">
      {selectedImages.length > 0 ? (
        <View className="flex-1">
          <Text className="text-gray-800 text-lg font-semibold mb-4">
            Seçilen Resimler ({selectedImages.length})
          </Text>

          <ScrollView className="flex-1 mb-4">
            <View className="flex-row flex-wrap">
              {selectedImages.map((uri, index) => (
                <View key={index} className="w-1/3 p-1">
                  <Image source={{ uri }} className="w-full h-32 rounded-lg" />
                  <TouchableOpacity
                    className="absolute top-1 right-1 bg-red-500 rounded-full w-6 h-6 items-center justify-center"
                    onPress={() => removeImage(uri)}
                  >
                    <Text className="text-white">×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View className="flex-1 justify-center">
          {hasPermission === false && (
            <>
              <Text className="text-gray-800 text-center mb-6">
                sahibinden.com uygulamasında fotoğraflara ve videolara erişim
                izni vermedin.
              </Text>

              <TouchableOpacity
                className="bg-gray-200 py-3 px-4 rounded-lg mb-4"
                onPress={requestGalleryPermission}
              >
                <Text className="text-gray-800 font-medium text-center">
                  Yönet
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}

      <View className="flex-row justify-between">
        <TouchableOpacity
          className="bg-blue-500 py-3 px-6 rounded-lg flex-1 mr-2"
          onPress={openGallery}
        >
          <Text className="text-white font-medium text-center">
            {selectedImages.length > 0 ? "Daha Fazla Resim Ekle" : "Resim Seç"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 py-3 px-6 rounded-lg flex-1 ml-2"
          onPress={handleContinue}
        >
          <Text className="text-white font-medium text-center">Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoVideoSelect;
