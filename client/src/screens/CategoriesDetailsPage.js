import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import DetailRow from "../components/DetailRow";
import { Linking } from "react-native";

const CategoriesDetailsPage = ({ route }) => {
  const { ilan } = route.params;
  const [activeTab, setActiveTab] = useState("İlan Bilgileri");
  const phoneNumber = "05431111111";
  const ilanResimleri = [
    require("../../assets/images/tir.jpg"),
    require("../../assets/images/tir2.jpeg"),
  ];
  const ilanDetay = {
    baslik: { ilan },
    satici: "DEMİR OTOMOTİV",
    kategori:
      "Vasıta > Ticari Araçlar > Çekici > Mercedes-Benz > Actros > 1844",
    konum: "Ordu, Ünye, Bayramca Mah.",
    fiyat: "2.580.000 TL",
    ilanTarihi: "17.04.2025",
    ilanNo: "12251809",
    tip: "Çekici",
    marka: "Mercedes-Benz",
    seri: "Actros",
    model: "1844",
    yil: "2013",
    durum: "İkinci El",
    motorHacmi: "4001 - 4500 cm3",
    motorGucu: "426 - 450 hp",
    kabinTipi: "Normal",
    lastikDurumu: "85",
    renk: "Beyaz",
    vites: "Otomatik",
    yakit: "Dizel",
    yatakSayisi: "2",
    dorse: "Yok",
    plakaUyruk: "Türkiye (TR) Plakalı",
    kimden: "Galeriden",
    takas: "Hayır",
    kilometre: "1.456.249 km",
    guvenlik: "Belirtilmemiş",
    donanim: "Belirtilmemiş",
  };

  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-sahibindengray">
      <ScrollView className="flex-1 ">
        <View className=" p-1 bg-sahibindenblur mt-0">
          <Text className="text-base  text-center">{ilan}</Text>
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
                    source={item}
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
            {ilanDetay.satici}
          </Text>
        </View>

        <View className="border-b border-sahibindenblur w-full" />

        <View className="items-center justify-center bg-sahibindenilan pb-0 ">
          <Text className="text-[13px] font-medium text-sahibindentextblue">
            {ilanDetay.kategori}
          </Text>
          <Text className="text-[13px] font-medium text-gray-400">
            {ilanDetay.konum}
          </Text>
          <View className="flex flex-row justify-between mt-3 w-full px-3 border-b-2 border-sahibindendarkyellow">
            <Pressable
              className={`flex-1 items-center py-2 border border-gray-300 mr-1 ${
                activeTab === "İlan Bilgileri"
                  ? "bg-sahibindendarkyellow"
                  : "bg-gray-100"
              }`}
              onPress={() => setActiveTab("İlan Bilgileri")}
            >
              <Text className="text-sm font-medium text-black px-2">
                İlan Bilgileri
              </Text>
            </Pressable>

            <Pressable
              className={`flex-1 items-center py-2 border border-gray-300 mx-1 ${
                activeTab === "Açıklama"
                  ? "bg-sahibindendarkyellow"
                  : "bg-gray-100"
              }`}
              onPress={() => setActiveTab("Açıklama")}
            >
              <Text className="text-sm font-medium text-black px-2">
                Açıklama
              </Text>
            </Pressable>

            <Pressable
              className={`flex-1 items-center py-2 border border-gray-300 ml-1 ${
                activeTab === "Konumu"
                  ? "bg-sahibindendarkyellow"
                  : "bg-gray-100"
              }`}
              onPress={() => setActiveTab("Konumu")}
            >
              <Text className="text-sm font-medium text-black px-2">
                Konumu
              </Text>
            </Pressable>
          </View>
        </View>
        {activeTab === "İlan Bilgileri" && (
          <>
            <View className="bg-white rounded-lg p-3 shadow-sm ">
              <View className="border-b border-gray-100 py-1">
                <View className="flex-row justify-between items-center h-5">
                  <Text className="text-gray-500 text-sm">Fiyat</Text>
                  <Text className="text-sahibindentextblue font-semibold text-sm">
                    {ilanDetay.fiyat}
                  </Text>
                </View>
              </View>

              <DetailRow label="İlan Tarihi" value={ilanDetay.ilanTarihi} />
              <DetailRow
                label="İlan No"
                value={ilanDetay.ilanNo}
                valueColor="text-sahibindentextred"
              />
              <DetailRow label="Tipi" value={ilanDetay.tip} />
              <DetailRow label="Marka" value={ilanDetay.marka} />
              <DetailRow label="Seri" value={ilanDetay.seri} />
              <DetailRow label="Model" value={ilanDetay.model} />
              <DetailRow label="Yıl" value={ilanDetay.yil} />
              <DetailRow label="Kilometre" value={ilanDetay.kilometre} />
              <DetailRow label="Araç Durumu" value={ilanDetay.durum} />
              <DetailRow label="Motor Hacmi" value={ilanDetay.motorHacmi} />
              <DetailRow label="Motor Gücü" value={ilanDetay.motorGucu} />
              <DetailRow label="Kabin Tipi" value={ilanDetay.kabinTipi} />
              <DetailRow
                label="Lastik Durumu"
                value={`${ilanDetay.lastikDurumu}%`}
              />
              <DetailRow label="Renk" value={ilanDetay.renk} />
              <DetailRow label="Vites" value={ilanDetay.vites} />
              <DetailRow label="Yakıt" value={ilanDetay.yakit} />
              <DetailRow label="Yatak Sayısı" value={ilanDetay.yatakSayisi} />
              <DetailRow label="Dorse" value={ilanDetay.dorse} />
              <DetailRow label="Plaka/Uyruk" value={ilanDetay.plakaUyruk} />
              <DetailRow label="Kimden" value={ilanDetay.kimden} />
              <DetailRow label="Takas" value={ilanDetay.takas} />
            </View>

            <View className="top-2 mb-16">
              <View className="bg-sahibindengray">
                <Text className="text-gray-500 text-lg font-normal left-3">
                  ÖZELLİKLER
                </Text>
              </View>
              <View className="bg-white">
                <View>
                  <Text className="text-black ml-3 text-base">Güvenlik</Text>
                  <Text className="text-gray-500 ml-3 text-base">
                    Belirtilmemiş
                  </Text>
                  <View className="border-b border-gray-100" />
                </View>
                <View className="h-20">
                  <Text className="text-black ml-3 text-base">Donanım</Text>
                  <Text className="text-gray-500 ml-3 text-base">
                    Belirtilmemiş
                  </Text>
                </View>
                <View className="border-b border-gray-200" />
              </View>
            </View>
          </>
        )}

        {activeTab === "Açıklama" && (
          <View className="mt-0 bg-white rounded-lg p-4 shadow-sm">
            <Text className="text-lg font-semibold mb-2">Açıklama</Text>
            <Text className="text-gray-700">
              Sahibinden temiz, bakımlı, kliması ve buzdolabı olan 2013 model
              Mercedes-Benz Actros 1844 çekici. Daha fazla bilgi için iletişime
              geçebilirsiniz.
            </Text>
          </View>
        )}

        {activeTab === "Konumu" && (
          <View className="bg-white rounded-lg p-4 shadow-sm mt-2">
            <Text>KONUM</Text>
          </View>
        )}
      </ScrollView>
      <View className="absolute bottom-0  flex-row px-4 py-8 border-gray-200">
        <Pressable
          className="flex-1 bg-sahibindenblue py-3 mr-2 items-center justify-center flex-row "
          onPress={makeCall}
        >
          <Text className="text-white font-bold ml-2">Ara</Text>
        </Pressable>

        <Pressable
          className="flex-1 bg-sahibindenblue py-3  items-center justify-center flex-row"
          onPress={() => console.log("Mesaj butonuna basıldı")}
        >
          <Text className="text-white font-bold ml-2">Mesaj Gönder</Text>
        </Pressable>
        <Pressable className="bg-sahibindenyellow rounded-full w-11 h-11 items-center justify-center mr-[-9px] ml-2 border">
          <FontAwesome5 name="car-alt" size={24} color="black" />
        </Pressable>
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View className="w-full h-full bg-black">
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
            <FontAwesome5 name="times" size={16} color="black" />
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
                  source={item}
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
