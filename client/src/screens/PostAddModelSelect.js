import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostAddModelSelect = ({ route }) => {
  const navigation = useNavigation();
  const { year } = route.params;
  const { marka } = route.params;
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row flex-wrap items-center mb-4">
        <Text className="text-blue-600 text-sm">
          VASITA {">"} OTOMOBİL {">"} {year} {">"} {marka}{" "}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", {
            screen: "İlan Ver",
            params: {
              screen: "PostAddCarDetails",
              params: { year: year, marka: marka },
            },
          });
        }}
      >
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-2">
            XXX 1.y {marka} el arabası
          </Text>

          <View className="flex-row flex-wrap mb-2">
            <Text className="text-gray-700 text-sm mr-2">• Dizel</Text>
            <Text className="text-gray-700 text-sm mr-2">
              • Camlı Van 5 kapı
            </Text>
            <Text className="text-gray-700 text-sm mr-2">• 225 HP</Text>
          </View>

          <View className="flex-row flex-wrap">
            <Text className="text-gray-700 text-sm mr-2">• 1598 cm3</Text>
            <Text className="text-gray-700 text-sm mr-2">• Otomatik</Text>
            <Text className="text-gray-700 text-sm mr-2">•{year}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white rounded-lg p-4 shadow-sm flex-row justify-between items-center">
        <Text className="text-blue-600 font-medium">
          Aracımı Listede Bulamadım
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostAddModelSelect;
