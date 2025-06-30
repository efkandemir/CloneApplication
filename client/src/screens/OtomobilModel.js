import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const OtomobilModel = ({ route }) => {
  const { marka } = route.params;
  const navigation = useNavigation();
  const [ilanlar, setIlanlar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchByBrand = async () => {
      try {
        const res = await axios.get(`/vehicle/get-by-brand/${marka}`);
        setIlanlar(res.data.vehicles || []);
      } catch (error) {
        console.error("Markaya göre araçlar alınırken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchByBrand();
  }, [marka]);

  if (loading)
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );

  if (ilanlar.length === 0)
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Bu markaya ait ilan bulunamadı.</Text>
      </View>
    );

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row justify-around items-center bg-white py-3 border-b border-gray-300">
        <Text className="font-semibold ml-3">Filtrele</Text>
        <View className="bg-gray-500 w-[1px] h-5" />
        <Text className="font-semibold ml-1">Sırala</Text>
        <View className="bg-gray-500 w-[1px] h-5 mr-[-26px]" />
        <Text className="font-semibold mr-[-8px]">Aramayı Kaydet</Text>
      </View>

      <FlatList
        data={ilanlar}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <Pressable
            className="bg-white flex-row items-center px-3 py-2 mb-2"
            onPress={() =>
              navigation.navigate("CategoriesDetails", { ilanId: item._id })
            }
          >
            <Image
              source={{ uri: item.selectedImages?.[0] }}
              style={{ width: 100, height: 75, borderRadius: 8 }}
              resizeMode="cover"
            />
            <View className="ml-3 flex-1">
              <Text
                className="text-sm font-semibold text-gray-800"
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text className="text-gray-900 font-bold mt-1 text-base">
                {item.price} TL
              </Text>
              <Text className="text-xs text-gray-700">
                {item.city}, {item.district}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default OtomobilModel;
