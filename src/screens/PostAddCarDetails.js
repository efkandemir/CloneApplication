import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const PostAddCarDetails = ({ route }) => {
  const { year } = route.params;
  const { marka } = route.params;

  return (
    <View className="flex-1 bg-sahibindengray">
      <View className="w-full h-9 bg-white items-center justify-center flex-row px-2 border-b border-gray-200">
        <Text className="text-base">
          Vasıta {">"} Otomobil {">"} {year} {">"} {marka}
        </Text>
      </View>

      <ScrollView className="px-4 bg-white ">
        <View className="bg-white">
          <Text className="text-lg font-bold text-gray-800 mb-2">
            XXX 1.y {marka} el arabası
          </Text>

          <View className="flex-row flex-wrap mb-2 border-b border-gray-200">
            <Text className="text-black text-sm mr-2">• Dizel</Text>
            <Text className="text-black text-sm mr-2">• Camlı Van 5 kapı</Text>
            <Text className="text-black text-sm mr-2">• 225 HP</Text>
            <Text className="text-black text-sm mr-2">•{year}</Text>
          </View>
          <View className="flex-row items-center my-1  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Vites</Text>
            <TextInput className="p-1 ml-2 " placeholder="Manuel" multiline />
          </View>
          <View className="flex-row items-center my-1  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Kasa Tipi</Text>
            <TextInput
              className="p-1 ml-2 "
              placeholder="Camlı Van"
              multiline
            />
          </View>
          <View className="flex-row items-center my-1  border-b border-gray-200 pb-3">
            <Text className="text-black font-semibold w-1/3">Çekiş</Text>
            <TextInput
              className="p-1 ml-2 "
              placeholder="4x2 (Önden Çekişli)"
              multiline
            />
          </View>
        </View>

        <View className="flex-row items-center my-3 border-b border-gray-200 pb-1 mt-4">
          <Text className="text-black font-semibold w-1/3">İlan Başlığı</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Başlık Girin"
          />
        </View>

        <View className="flex-row items-center my-1  border-b border-gray-200 pb-3">
          <Text className="text-black font-semibold w-1/3">Açıklama</Text>
          <TextInput
            className="p-1 ml-2 "
            placeholder="Açıklama Girin"
            multiline
          />
        </View>

        <View className="flex-row items-center my-3  pb-3 border-b border-gray-200">
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

        <View>
          <Text className="text-black font-bold text-base">Araç Durumu</Text>
        </View>

        <View className="flex-row items-center my-3">
          <Text className="text-black font-semibold w-1/3">Km</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Km Girin"
            keyboardType="numeric"
          />
        </View>

        <View className="flex-row items-center my-3">
          <Text className="text-black font-semibold w-1/3">Şasi</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Şasi Numarası Girin"
          />
        </View>

        <View className="flex-row items-center my-3">
          <Text className="text-black  font-semibold w-1/3">Koltuk Sayısı</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="4+1"
            value="4+1"
          />
        </View>

        <View className="flex-row items-center my-3">
          <Text className="text-black font-semibold w-1/3">Renk</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Renk Girin"
          />
        </View>

        <View className="flex-row items-center my-3">
          <Text className="text-black font-semibold w-1/3">Ruhsat Kaydı</Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Ruhsat Kaydı Girin"
          />
        </View>

        <View className="flex-row items-center my-3 mb-6">
          <Text className="text-black font-semibold w-1/3">
            Ağır Hasar Kaydı
          </Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Var/Yok"
          />
        </View>

        <View className="mb-4">
          <Text className="text-black font-bold text-sm">Araç Plakası</Text>
        </View>

        <View className="flex-row items-center my-1">
          <Text className="text-gray-700 font-semibold w-1/3">
            Araç Plakası
          </Text>
          <TextInput
            className="flex-1  rounded-md p-1 ml-2"
            placeholder="Plakayı girin"
          />
        </View>

        <View>
          <Text className="text-gray-500 text-sm">
            Araç plakası yayınlanan ilanlarda görünmeyecektir.
          </Text>
        </View>

        <View className="flex-row items-center my-5">
          <Text className="text-gray-700 font-semibold w-1/3">Takas</Text>
          <View className="flex-1 ml-2">
            <Text className="text-gray-700">Evet/Hayır seçenekleri buraya</Text>
          </View>
        </View>

        <View className="flex-row items-center my-3 mb-8">
          <Text className="text-gray-700 font-semibold w-1/3">Plaka Türü</Text>
          <View className="flex-1 ml-2">
            <Text className="text-gray-700">
              Türkiye/Yabancı plaka seçenekleri
            </Text>
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
