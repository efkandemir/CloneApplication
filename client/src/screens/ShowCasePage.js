import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ShowCasePage = () => {
  const navigation = useNavigation();
  const [ilanlar, setIlanlar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIlanlar = async () => {
      try {
        const res = await axios.get("/vehicle/get-all");
        setIlanlar(res.data.vehicles || []);
      } catch (error) {
        console.error("İlanları çekerken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIlanlar();
  }, []);

  if (loading)
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#2563eb" />
      </SafeAreaView>
    );

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 2 - 16;

  const renderItem = ({ item }) => (
    <View
      className="bg-white m-1 p-1 overflow-hidden"
      style={{ width: cardWidth }}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("CategoriesDetails", { ilanId: item._id })
        }
      >
        <Image
          source={{ uri: item.selectedImages?.[0] }}
          className="w-full h-32"
          resizeMode="cover"
        />
        <Text
          className="p-3 text-center text-gray-800 font-semibold text-base"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <FlatList
        data={ilanlar}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }} 
      />
    </SafeAreaView>
  );
};

export default ShowCasePage;
