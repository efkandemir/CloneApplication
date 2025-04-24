import React from "react";
import { View, TextInput, Text } from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  showIcon = false,
}) => {
  return (
    <View className="relative mb-4">
      <TextInput
        className="border border-gray-300 px-4 py-3 bg-white rounded-md"
        placeholder={placeholder}
        placeholderTextColor="#888"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {showIcon && (
        <Text className="absolute right-3 top-3.5 text-gray-400">👁️</Text>
      )}
    </View>
  );
};

export default CustomInput;
