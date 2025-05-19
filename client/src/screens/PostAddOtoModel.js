import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";

const PostAddOtoModel = ({ route }) => {
  const navigation = useNavigation();
  const { year } = route.params;
  const markalar = [
    { title: "Audi" },
    { title: "BMW" },
    { title: "BYD" },
    { title: "Citroen" },
    { title: "Cupra" },
    { title: "Dacia" },
    { title: "DSAutomobiles" },
    { title: "Ferrari" },
    { title: "Fiat" },
    { title: "Ford" },
    { title: "Honda" },
    { title: "Hyundai" },
    { title: "Jaguar" },
    { title: "Kia" },
    { title: "Lexus" },
    { title: "Maserati" },
    { title: "MercedesBenz" },
    { title: "Mini" },
    { title: "Opel" },
    { title: "Peugeot" },
    { title: "Porsche" },
    { title: "Renault" },
    { title: "Seat" },
    { title: "Skoda" },
    { title: "Suzuki" },
    { title: "Tesla" },
    { title: "Toyota" },
    { title: "Volkswagen" },
    { title: "Volvo" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={markalar}
        keyExtractor={(item, index) => `marka-${index}`}
        ListHeaderComponent={
          <View className="px-4 bg-sahibindengray border-b border-gray-200 h-10 justify-end">
            <Text className="text-xs font-bold text-sahibindenstatusgrey pb-1">
              VASITA {">"} OTOMOBİL {">"} {year}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", {
                screen: "İlan Ver",
                params: {
                  screen: "PostAddModelSelect",
                  params: { year: year, marka: item.title },
                },
              });
            }}
          >
            <CategoryRow title={item.title} section="vasitaoremlak" />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PostAddOtoModel;
