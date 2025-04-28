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
    <View className="flex-1 bg-white">
      <View className="w-full h-8 bg-sahibindenblur items-center justify-center">
        <Text>
          Vasıta {">"} Otomobil {">"} {year} {">"} {marka}
        </Text>
      </View>
      <ScrollView className="px-4">
        <View className="my-3">
          <Text className="text-gray-700 font-semibold mb-2">İlan Başlığı</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Başlık Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Açıklama</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3 h-32 text-start"
            placeholder="Açıklama Girin"
            multiline
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Fiyat</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Fiyat Girin"
            keyboardType="numeric"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Araç Durumu</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Araç Durumu Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Km</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Kilometre Girin"
            keyboardType="numeric"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Şasi</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Şasi Numarası Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">
            Koltuk Sayısı
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Koltuk Sayısı Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Renk</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Renk Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">Ruhsat Kaydı</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Ruhsat Kaydı Girin"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold mb-2">
            Ağır Hasar Kaydı
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-3"
            placeholder="Ağır Hasar Kaydı Var mı?"
          />
        </View>

        <TouchableOpacity className="bg-blue-600 rounded-xl p-4 mt-6 mb-10">
          <Text className="text-white text-center font-semibold text-lg">
            Devam Et
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default PostAddCarDetails;
