import { View, Text } from "react-native";
import React from "react";

const OtomobilModel = ({ route }) => {
  const { marka } = route.params;
  console.log(marka);
  return (
    <View className="flex-1">
      <Text className>{marka}</Text>
    </View>
  );
};

export default OtomobilModel;
