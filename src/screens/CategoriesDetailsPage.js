import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CategoriesDetailsPage = ({ route }) => {
  const { ilan } = route.params;
  const [activeTab, setActiveTab] = useState("İlan Bilgileri");

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

  return (
    <View className="flex-1 bg-sahibindengray">
      <ScrollView className="flex-1 ">
        <View className=" p-1 bg-sahibindenblur mt-0">
          <Text className="text-base  text-center">{ilan}</Text>
        </View>

        <View className="bg-white rounded-lg h-[280px]  justify-center items-center px-2">
          <Image
            source={require("../../assets/images/tir.jpg")}
            className="w-full h-full rounded-lg"
            resizeMode="contain"
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
            <View className="bg-white rounded-lg p-2 shadow-sm">
              <View className="border-b border-gray-100 py-1">
                <View className="flex-row justify-between items-center h-5">
                  <Text className="text-gray-500 text-sm">Fiyat</Text>
                  <Text className="text-sahibindentextblue font-semibold text-sm">
                    {ilanDetay.fiyat}
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">İlan Tarihi</Text>
                <Text>{ilanDetay.ilanTarihi}</Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">İlan No</Text>
                <Text className="font-medium text-sahibindentextred">
                  {ilanDetay.ilanNo}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Tipi</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.tip}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Marka</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.marka}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Seri</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.seri}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Model</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.model}
                </Text>
              </View>

              <View className="flex-row justify-between py-3">
                <Text className="text-gray-500">Yıl</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.yil}
                </Text>
              </View>

              <View className="flex-row justify-between py-3">
                <Text className="text-gray-500">Kilometre</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.kilometre}
                </Text>
              </View>
              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Araç Durumu</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.durum}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Motor Hacmi</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.motorHacmi}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Motor Gücü</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.motorGucu}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Kabin Tipi</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.kabinTipi}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Lastik Durumu</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.lastikDurumu}%
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Renk</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.renk}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Vites</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.vites}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Yakıt</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.yakit}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Yatak Sayısı</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.yatakSayisi}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Dorse</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.dorse}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Plaka/Uyruk</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.plakaUyruk}
                </Text>
              </View>

              <View className="flex-row justify-between py-3 border-b border-gray-100">
                <Text className="text-gray-500">Kimden</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.kimden}
                </Text>
              </View>

              <View className="flex-row justify-between py-3">
                <Text className="text-gray-500">Takas</Text>
                <Text className="text-sahibindenstatusgrey">
                  {ilanDetay.takas}
                </Text>
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
    </View>
  );
};

export default CategoriesDetailsPage;
