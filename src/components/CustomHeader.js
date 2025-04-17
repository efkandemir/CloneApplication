import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = ({ title, showicon, showTwoIcons, showCarIcon }) => {
  return (
    <View className="flex-row items-center justify-between w-full h-12 ">
      {showicon && (
        <Image
          source={require('../../assets/images/sahibinden.png')}
          className="w-7 h-7 ml-[-6px]"
        />
      )}
      <View className="flex-1 items-center justify-center ">
        <Text className="text-lg font-bold text-white">{title}</Text>
      </View>
      <View className="flex-row space-x-1">
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
    </View>
  );
};

export default CustomHeader;
