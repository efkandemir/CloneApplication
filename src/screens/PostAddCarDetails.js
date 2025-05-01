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

const PostAddCarDetails = ({ route }) => {
  const { year } = route.params;
  const { marka } = route.params;
  const [agreed, setAgreed] = useState(false);

  return (
    <View className="flex-1 bg-sahibindengray">
      <View className="w-full h-9 bg-white items-center justify-center flex-row px-2 border-b border-gray-200">
        <Text className="text-base">
          Vasıta {">"} Otomobil {">"} {year} {">"} {marka}
        </Text>
      </View>

      <ScrollView className=" bg-white ">
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
          <Text className="text-black  font-semibold w-1/3">Koltuk Sayısı</Text>
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
            <Text className="text-gray-700">Evet/Hayır seçenekleri buraya</Text>
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
        <View className="bg-white w-full h-[580px]">
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
            <Pressable onPress={() => console.log("onkaput")}>
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
              <Pressable onPress={() => console.log("soloncamurluk")}>
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
              <Pressable onPress={() => console.log("motorkaput")}>
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
              <Pressable onPress={() => console.log("sagoncamurluk")}>
                <Image
                  source={require("../../assets/images/sagon.png")}
                  style={{
                    width: 180,
                    height: 82,
                    resizeMode: "contain",
                    marginLeft: -58,
                  }}
                />
              </Pressable>
            </View>
            <View className="flex-row">
              <Pressable onPress={() => console.log("solonkapi")}>
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
              <Pressable onPress={() => console.log("sagonkapi")}>
                <Image
                  source={require("../../assets/images/sagonkapi.png")}
                  style={{
                    width: 100,
                    height: 80,
                    resizeMode: "stretch",
                    marginLeft: -1,
                  }}
                />
              </Pressable>
            </View>
            <View className="flex-row">
              <Pressable onPress={() => console.log("solarkakapi")}>
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
              <Pressable onPress={() => console.log("tampon")}>
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
              <Pressable onPress={() => console.log("sagarkakapi")}>
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
              <Pressable onPress={() => console.log("solarkacamurluk")}>
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
              <Pressable onPress={() => console.log("bagajkapagi")}>
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
              <Pressable onPress={() => console.log("sagarkacamurluk")}>
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
            <Pressable onPress={() => console.log("arkatampon")}>
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
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity className="bg-blue-600 rounded-lg p-3  ">
        <Text className="text-white text-center font-semibold">Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostAddCarDetails;
