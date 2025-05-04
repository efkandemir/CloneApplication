import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import CategoryRow from "../components/CategoryRow";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AracModal from "../components/AracModal";
import StepProgress from "../components/StepProgress";
import { useNavigation } from "@react-navigation/native";
const PostAddCarDetails = ({ route }) => {
  const { year } = route.params;
  const { marka } = route.params;
  const [agreed, setAgreed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [aktifBaslik, setAktifBaslik] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const navigation=useNavigation();

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      navigation.navigate('MapPage')
    }
  };
 
  return (
    <View className="flex-1 bg-sahibindengray">
      <View className="w-full h-9 bg-white items-center justify-center flex-row px-2 border-b border-gray-200">
        <Text className="text-base">
          Vasıta {">"} Otomobil {">"} {year} {">"} {marka}
        </Text>
      </View>

      <ScrollView className=" bg-sahibindengray ">
        <View className="bg-white ">
          <CategoryRow title={`XXX 1.y ${marka} el arabası`} brand={marka} />

          <View className="flex-row flex-wrap mb-2 border-b border-gray-200 ml-3 mt-2">
            <Text className="text-black text-sm mr-2">• Dizel</Text>
            <Text className="text-black text-sm mr-2">• Camlı Van 5 kapı</Text>
            <Text className="text-black text-sm mr-2">• 225 HP</Text>
            <Text className="text-black text-sm mr-2">•{year}</Text>
          </View>
          <View className="flex-row items-center ml-3  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Vites</Text>
            <TextInput className="p-1 ml-2 " placeholder="Manuel" multiline />
          </View>
          <View className="flex-row items-center my-1 ml-3  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Kasa Tipi</Text>
            <TextInput
              className="p-1 ml-2 "
              placeholder="Camlı Van"
              multiline
            />
          </View>
          <View className="flex-row items-center my-1 ml-3  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Çekiş</Text>
            <TextInput
              className="p-1 ml-2 "
              placeholder="4x2 (Önden Çekişli)"
              multiline
            />
          </View>
          <View className="flex-row items-center my-3 ml-3 border-b border-gray-200 pb-1 mt-4">
            <Text className="text-black font-semibold w-1/3">İlan Başlığı</Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Başlık Girin"
            />
          </View>

          <View className="flex-row items-center my-1 ml-3  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Açıklama</Text>
            <TextInput
              className="p-1 ml-2 "
              placeholder="Açıklama Girin"
              multiline
            />
          </View>

          <View className="flex-row items-center my-3 ml-3  pb-3 border-b border-gray-200">
            <Text className="text-black font-semibold w-1/3">Fiyat</Text>
            <View className="flex-1 flex-row items-center ml-2">
              <TextInput
                className="flex-1  rounded-md p-1"
                placeholder="Fiyat Girin"
                keyboardType="numeric"
              />
              <Text className="ml-2 text-black">TL</Text>
            </View>
          </View>

          <View className="ml-3">
            <Text className="text-black font-bold text-base">Araç Durumu</Text>
          </View>

          <View className="flex-row items-center my-3 ml-3">
            <Text className="text-black font-semibold w-1/3">Km</Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Km Girin"
              keyboardType="numeric"
            />
          </View>

          <View className="flex-row items-center my-3 ml-3">
            <Text className="text-black font-semibold w-1/3">Şasi</Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Şasi Numarası Girin"
            />
          </View>

          <View className="flex-row items-center my-3 ml-3">
            <Text className="text-black  font-semibold w-1/3">
              Koltuk Sayısı
            </Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="4+1"
              value="4+1"
            />
          </View>

          <View className="flex-row items-center my-3 ml-3">
            <Text className="text-black font-semibold w-1/3">Renk</Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Renk Girin"
            />
          </View>

          <View className="flex-row items-center my-3 ml-3">
            <Text className="text-black font-semibold w-1/3">Ruhsat Kaydı</Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Ruhsat Kaydı Girin"
            />
          </View>

          <View className="flex-row items-center my-3 mb-6 ml-3 ">
            <Text className="text-black font-semibold w-1/3">
              Ağır Hasar Kaydı
            </Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Var/Yok"
            />
          </View>

          <View className="mb-4 ml-3">
            <Text className="text-black font-bold text-sm">Araç Plakası</Text>
          </View>

          <View className="flex-row items-center my-1 ml-3">
            <Text className="text-gray-700 font-semibold w-1/3">
              Araç Plakası
            </Text>
            <TextInput
              className="flex-1  rounded-md p-1 ml-2"
              placeholder="Plakayı girin"
            />
          </View>

          <View className="ml-3">
            <Text className="text-gray-500 text-sm">
              Araç plakası yayınlanan ilanlarda görünmeyecektir.
            </Text>
          </View>

          <View className="flex-row items-center my-5 ml-3">
            <Text className="text-gray-700 font-semibold w-1/3">Takas</Text>
            <View className="flex-1 ml-2">
              <Text className="text-gray-700">
                Evet/Hayır seçenekleri buraya
              </Text>
            </View>
          </View>

          <View className="flex-row items-center my-3 mb-8 ml-3">
            <Text className="text-gray-700 font-semibold w-1/3">
              Plaka / Uyruk
            </Text>
            <View className="flex-1 ml-2">
              <Text className="text-gray-700">
                Türkiye/Yabancı plaka seçenekleri
              </Text>
            </View>
          </View>
          <View className="bg-sahibindengray w-full h-6"></View>
          <View className="bg-gray-300  h-[1px] " />
          <View className="bg-sahibindengray w-full h-12">
            <Text className="ml-2 mt-5 text-sahibindentextgrey">
              BOYA, DEĞİŞEN VE EKSPERTİZ BİLGİSİ
            </Text>
          </View>
          <View className="bg-gray-300  h-[1px] " />
          <View className="bg-white w-full ">
            <View className="ml-3 mt-3 flex-row">
              <Text className="text-gray-600">0/13 </Text>
              <Text className="text-sahibindentextgrey">
                parça için seçim yapıldı.
              </Text>
            </View>
            <View className="bg-gray-300  h-[1px] mt-2" />
            <View className="flex-row space-x-4 items-center px-2 py-2 justify-center">
              <View className="flex-row items-center space-x-1">
                <View className="h-4 w-4 bg-gray-400 rounded-sm" />
                <Text className="text-xs text-gray-600">Orijinal</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <View className="h-4 w-4 bg-orange-400 rounded-sm" />
                <Text className="text-xs text-gray-600">Lokal Boyalı</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <View className="h-4 w-4 bg-blue-500 rounded-sm" />
                <Text className="text-xs text-gray-600">Boyalı</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <View className="h-4 w-4 bg-red-400 rounded-sm" />
                <Text className="text-xs text-gray-600">Değişen</Text>
              </View>
            </View>
            <View className="bg-white">
              <Pressable
                onPress={() => {
                  setAktifBaslik("Ön Tampon");
                  setModalVisible(true);
                }}
              >
                <Image
                  source={require("../../assets/images/ontampon.png")}
                  style={{
                    width: 150,
                    height: 65,
                    resizeMode: "contain",
                    marginLeft: 122,
                  }}
                />
              </Pressable>
              <View className="flex-row">
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sol Ön Çamurluk");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/solon.png")}
                    style={{
                      width: 160,
                      height: 80,
                      resizeMode: "contain",
                      marginRight: -8,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Motor Kaput");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/motorkaputu.png")}
                    style={{
                      width: 180,
                      height: 82,
                      resizeMode: "contain",
                      marginLeft: -42,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sağ Ön Çamurluk");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/sagon.png")}
                    style={{
                      width: 160,
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: -50,
                    }}
                  />
                </Pressable>
              </View>
              <View className="flex-row">
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sol Ön Kapı");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/solonkapı.png")}
                    style={{
                      width: 110,
                      height: 80,
                      resizeMode: "stretch",
                      marginLeft: 38,
                      marginTop: -2,
                    }}
                  />
                </Pressable>
                <Image
                  source={require("../../assets/images/tavan1.png")}
                  style={{
                    width: 118,
                    height: 82,
                    resizeMode: "contain",
                    marginLeft: -8,
                    marginTop: -4,
                  }}
                />
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sağ Ön Kapı");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/sagonkapi.png")}
                    style={{
                      width: 90,
                      height: 80,
                      resizeMode: "stretch",
                      marginLeft: 0,
                      marginTop: -2,
                    }}
                  />
                </Pressable>
              </View>
              <View className="flex-row">
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sol Arka Kapı");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/solarkakapi.png")}
                    style={{
                      width: 100,
                      height: 80,
                      resizeMode: "stretch",
                      marginLeft: 50,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Tavan");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/tavan2.png")}
                    style={{
                      width: 97,
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: 4,
                      marginTop: -11,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sağ Arka Kapı");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/sagarkakapi.png")}
                    style={{
                      width: 100,
                      height: 80,
                      resizeMode: "stretch",
                      marginLeft: -2,
                    }}
                  />
                </Pressable>
              </View>
              <View className="flex-row">
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sol Arka Çamurluk");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/solarkacamurluk.png")}
                    style={{
                      width: 94,
                      height: 53,
                      resizeMode: "stretch",
                      marginLeft: 48,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Bagaj Kapağı");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/bagajkapagi.png")}
                    style={{
                      width: 110,
                      height: 68,
                      resizeMode: "stretch",
                      marginLeft: 6,
                      marginTop: -21,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAktifBaslik("Sağ Arka Çamurluk");
                    setModalVisible(true);
                  }}
                >
                  <Image
                    source={require("../../assets/images/sagarkacamurluk.png")}
                    style={{
                      width: 94,
                      height: 53,
                      resizeMode: "stretch",
                      marginLeft: 3,
                    }}
                  />
                </Pressable>
              </View>
              <Pressable
                onPress={() => {
                  setAktifBaslik("Arka Tampon");
                  setModalVisible(true);
                }}
              >
                <Image
                  source={require("../../assets/images/arkatampon.png")}
                  style={{
                    width: 134,
                    height: 65,
                    resizeMode: "contain",
                    marginLeft: 137,
                    marginTop: -6,
                  }}
                />
              </Pressable>
              <AracModal
                baslik={aktifBaslik}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
              />

              <View className="mt-2 ml-3">
                <Pressable
                  onPress={() => setAgreed(!agreed)}
                  className="flex-row items-center mb-3"
                >
                  <Icon
                    name={agreed ? "radio-button-on" : "radio-button-off"}
                    size={28}
                    color={agreed ? "#0a84ff" : "#ccc"}
                  />
                  <Text className="text-sm ml-2 mt-4">
                    2 Aracın tüm parçaları orijinaldir. Değişen ve boyalı {"\n"}
                    parçası bulunmamaktadır.
                  </Text>
                </Pressable>
              </View>
              <View className="bg-gray-300  h-[1px]" />
              <View className="w-full items-center mt-2">
                <TouchableOpacity onPress={() => console.log("tıklandı")}>
                  <View className="flex-row items-center justify-center">
                    <Ionicons
                      name="document-attach-outline"
                      size={24}
                      color="#206ca8"
                    />
                    <Text className="text-sahibindentextblue text-lg font-semibold ml-2">
                      Ekspertiz Raporu Ekle
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="bg-gray-300  h-[1px] mt-2" />
              <View className="w-full mt-4 items-center">
                <Text>
                  <Text className="text-gray-500 font-semibold text-xs">
                    5 Mb
                  </Text>
                  <Text className="text-sahibindentextgrey text-xs">
                    'dan büyük olmamalı ve{" "}
                  </Text>
                  <Text className="text-gray-500 font-semibold text-xs">
                    PDF
                  </Text>
                  <Text className="text-sahibindentextgrey text-xs">
                    {" "}
                    formatında eklemelisiniz.
                  </Text>
                </Text>
              </View>
              <View className="bg-gray-300  h-[1px] mt-2" />
              <View className="bg-sahibindengray w-full h-12" />
            </View>
          </View>
        </View>
      </ScrollView>
      <StepProgress
        currentStep={currentStep}
        totalSteps={5}
        onNext={handleNext}
      />
    </View>
  );
};

export default PostAddCarDetails;
