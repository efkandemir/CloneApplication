import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between w-full px-1">
      <Image
        source={require('../../assets/images/sahibinden.png')}
        className="w-7 h-7"
      />
      <Text className="text-lg font-bold text-white">{title}</Text>
      <Ionicons name="car-outline" size={24} color="white" />
    </View>
  );
};

export default CustomHeader;
