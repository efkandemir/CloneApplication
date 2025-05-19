import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExitModal from "../components/ExitModal.js";
import { useState } from "react";

const CustomHeader = ({
  title,
  showicon,
  showTwoIcons,
  showCarIcon,
  onClose,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = () => {
    setIsModalVisible(true);
  };

  const handleBack = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <View className="flex-row items-center justify-between w-full h-12 ">
      {showicon && (
        <Image
          source={require("../../assets/images/sahibinden.png")}
          className="w-7 h-7 ml-[-6px]"
        />
      )}
      <View className="flex-1 items-center justify-center ml-1 ">
        <Text className="text-lg font-bold text-white">{title}</Text>
      </View>
      <View className="flex-row space-x-1">
        {!showicon && onClose && (
          <View className="mr-[-48px]">
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}
        {showicon && !showTwoIcons && showCarIcon ? (
          <Ionicons name="car-outline" size={24} color="white" />
        ) : showTwoIcons ? (
          <View className="flex-row mr-[-35px]">
            <Ionicons name="car-outline" size={26} color="white" />
            <Ionicons name="star-outline" size={24} color="white" />
          </View>
        ) : !showicon && !showTwoIcons && !showCarIcon ? (
          <View className="w-6" />
        ) : (
          <View className="w-6" />
        )}
      </View>
      <ExitModal
        visible={isModalVisible}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default CustomHeader;
