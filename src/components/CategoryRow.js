import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const iconMap = {
  home: "home",
  car: "car",
  "car-wrench": "car-wrench",
  shopping: "shopping",
  recycle: "recycle",
  tools: "tools",
  "account-wrench": "account-wrench",
  school: "school",
  briefcase: "briefcase",
  paw: "paw",
  "account-group": "account-group",
};

const CategoryRow = ({ title, icon, description, color, section }) => {
  const hasIcon = icon && iconMap[icon];

  return (
    <SafeAreaView className="flex-row items-center bg-sahibin rounded-lg pt-0 mb-2 h-auto px-4 py-2 m-2">
      {hasIcon && (
        <View
          className="w-9 h-9 items-center justify-center rounded-full mr-4"
          style={{ backgroundColor: color }}
        >
          <MaterialCommunityIcons
            name={iconMap[icon]}
            size={25}
            color="white"
          />
        </View>
      )}
      {section == "vasitaoremlak" ? (
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-normal">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
          </View>
          <View className="bg-sahibindengray w-full h-[2px] mt-1" />
        </View>
      ) : (
        <View className="flex-1">
          <Text className="text-lg font-normal">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
          <View className="bg-sahibindengray w-full h-[2px] mt-1" />
        </View>
      )}

    </SafeAreaView>
  );
};
export default CategoryRow;
