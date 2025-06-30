import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  Modal,
  ActivityIndicator,
  Linking,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";
import DetailRow from "../components/DetailRow";

const CategoriesDetailsPage = ({ route }) => {
  const { ilanId } = route.params;
  const [ilan, setIlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("İlan Bilgileri");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchIlanDetails = async () => {
      try {
        console.log(ilanId);
        const res = await axios.get(`/vehicle/get/${ilanId}`);
        setIlan(res.data.vehicle);
      } catch (error) {
        console.error("İlan detayları alınırken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIlanDetails();
  }, [ilanId]);

  const phoneNumber = ilan?.phoneNumber || "05431111111";

  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!ilan) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>İlan bulunamadı veya yüklenemedi.</Text>
      </View>
    );
  }

  const ilanResimleri = ilan.selectedImages || [];

  return (
    <View className="flex-1 bg-sahibindengray">
      <ScrollView className="flex-1">
        <View className="p-1 bg-sahibindenblur mt-0">
          <Text className="text-base text-center">{ilan.title}</Text>
        </View>

        <View className="bg-white rounded-lg h-[280px] justify-center items-center overflow-hidden">
          <FlatList
            data={ilanResimleri}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={{ width: Dimensions.get("window").width }}>
                <Pressable
                  onPress={() => {
                    setSelectedIndex(index);
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={{ uri: item }}
                    style={{ width: "100%", height: 280 }}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            )}
          />
        </View>

        <View className="items-center justify-center h-8 bg-sahibindenilan">
          <Text className="text-lg font-medium text-sahibindentextblue">
            {ilan.user?.name || "Bilinmeyen Satıcı"}
          </Text>
        </View>

        <View className="border-b border-sahibindenblur w-full" />

        <View className="items-center justify-center bg-sahibindenilan pb-0">
          <Text className="text-[13px] font-medium text-sahibindentextblue">
            {`${ilan.marka || ""} - ${ilan.kasatipi || ""}`}
          </Text>
          <Text className="text-[13px] font-medium text-gray-400">
            {`${ilan.city || ""}, ${ilan.district || ""}, ${
              ilan.neighborhood || ""
            }`}
          </Text>

          <View className="flex flex-row justify-between mt-3 w-full px-3 border-b-2 border-sahibindendarkyellow">
            {["İlan Bilgileri", "Açıklama", "Konumu"].map((tab) => (
              <Pressable
                key={tab}
                className={`flex-1 items-center py-2 border border-gray-300 mx-1 ${
                  activeTab === tab ? "bg-sahibindendarkyellow" : "bg-gray-100"
                }`}
                onPress={() => setActiveTab(tab)}
              >
                <Text className="text-sm font-medium text-black px-2">
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {activeTab === "İlan Bilgileri" && (
          <View className="bg-white rounded-lg p-3 shadow-sm">
            <View className="border-b border-gray-100 py-1">
              <View className="flex-row justify-between items-center h-5">
                <Text className="text-gray-500 text-sm">Fiyat</Text>
                <Text className="text-sahibindentextblue font-semibold text-sm">
                  {ilan.price} TL
                </Text>
              </View>
            </View>

            <DetailRow label="Marka" value={ilan.marka} />
            <DetailRow label="Model Yılı" value={ilan.year} />
            <DetailRow label="Kilometre" value={`${ilan.km} km`} />
            <DetailRow label="Renk" value={ilan.color} />
            <DetailRow label="Plaka" value={ilan.plate} />
            <DetailRow label="Kasa Tipi" value={ilan.kasatipi} />
            <DetailRow label="Koltuk Sayısı" value={ilan.seatCount} />
            <DetailRow label="Vites" value={ilan.vites} />
            <DetailRow label="Çekiş" value={ilan.çekiş} />
            <DetailRow label="Şasi No" value={ilan.chassisNumber} />
            <DetailRow label="Hasar Kaydı" value={ilan.damageRecord} />
            <DetailRow label="Araç Tipi" value={ilan.licenseRecord} />
          </View>
        )}

        {activeTab === "Açıklama" && (
          <View className="mt-2 bg-white rounded-lg p-4 shadow-sm">
            <Text className="text-lg font-semibold mb-2">Açıklama</Text>
            <Text className="text-gray-700">
              {ilan.description || "Açıklama yok."}
            </Text>
          </View>
        )}

        {activeTab === "Konumu" && (
          <View className="bg-white rounded-lg p-4 shadow-sm mt-2">
            <Text className="font-semibold mb-1">Konum</Text>
            <Text>{`${ilan.city}, ${ilan.district}, ${ilan.neighborhood}`}</Text>
          </View>
        )}
      </ScrollView>

      <View className="absolute bottom-0 flex-row px-4 py-8 border-gray-200 bg-white">
        <Pressable
          className="flex-1 bg-sahibindenblue py-3 mr-2 items-center justify-center flex-row rounded"
          onPress={makeCall}
        >
          <FontAwesome5 name="phone" size={18} color="white" />
          <Text className="text-white font-bold ml-2">Ara</Text>
        </Pressable>

        <Pressable
          className="flex-1 bg-sahibindenblue py-3 items-center justify-center flex-row rounded"
          onPress={() => console.log("Mesaj butonuna basıldı")}
        >
          <FontAwesome5 name="envelope" size={18} color="white" />
          <Text className="text-white font-bold ml-2">Mesaj Gönder</Text>
        </Pressable>

        <Pressable className="bg-sahibindenyellow rounded-full w-11 h-11 items-center justify-center ml-2 border">
          <FontAwesome5 name="car-alt" size={24} color="black" />
        </Pressable>
      </View>

      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{
              position: "absolute",
              top: 40,
              right: 20,
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.6)",
              borderRadius: 20,
              padding: 6,
            }}
          >
            <FontAwesome5 name="times" size={24} color="black" />
          </Pressable>

          <FlatList
            data={ilanResimleri}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            initialScrollIndex={selectedIndex}
            getItemLayout={(data, index) => ({
              length: Dimensions.get("window").width,
              offset: Dimensions.get("window").width * index,
              index,
            })}
            renderItem={({ item }) => (
              <View
                style={{
                  width: Dimensions.get("window").width,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CategoriesDetailsPage;
