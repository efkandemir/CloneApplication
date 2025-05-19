import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MapPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      navigation.navigate("MapPage");
    }
  };
  return (
    <View className="flex-1">
      <View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-6 rounded-t-2xl shadow-lg">
        <TouchableOpacity className="bg-blue-600 py-3 mb-3">
          <Text className="text-white text-center font-semibold text-base">
            Önceden Seçilmiş Konumu Kullan
          </Text>
          <Text className="text-white text-center text-sm">
            Ordu, Ünye, Atatürk Mh.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-blue-600 py-3 mb-3">
          <Text className="text-sahibindenblue text-center font-bold text-base">
            Mevcut Konumu Kullan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-blue-600  py-3 mb-3"
          onPress={() => {
            navigation.navigate("AddressSelect");
          }}
        >
          <Text className="text-sahibindenblue text-center font-bold text-base">
            Kendim Seçmek İstiyorum
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapPage;
