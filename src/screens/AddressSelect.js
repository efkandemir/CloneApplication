import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react-native";
import StepProgress from "../components/StepProgress";

const AddressSelect = () => {
  return (
    <View className="flex-1 bg-gray-100 relative">
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-gray-500 font-semibold text-sm mb-2">
          ADRES SEÇİMİ
        </Text>

        <View className="bg-white border border-gray-200 rounded-md mb-3 px-4 py-3 flex-row justify-between items-center">
          <Text className="text-gray-600">Ülke</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">Türkiye</Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </View>

        <View className="bg-white border border-gray-200 rounded-md mb-3 px-4 py-3 flex-row justify-between items-center">
          <Text className="text-gray-600">İl</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">Ordu</Text>
            <HelpCircle size={16} color="#4b5563" />
            <ChevronRight size={16} color="gray" />
          </View>
        </View>

        <View className="bg-white border border-gray-200 rounded-md mb-3 px-4 py-3 flex-row justify-between items-center">
          <Text className="text-gray-600">İlçe</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">Ünye</Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </View>

        <View className="bg-white border border-gray-200 rounded-md mb-6 px-4 py-3 flex-row justify-between items-center">
          <Text className="text-gray-600">Mahalle</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">İnkur Mh.</Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </View>

        <TouchableOpacity className="border border-blue-500 rounded-md py-3 items-center">
          <Text className="text-blue-500 font-semibold">Haritada İşaretle</Text>
        </TouchableOpacity>
      </ScrollView>

      <StepProgress currentStep={2} totalSteps={5} onNext={() => {}} />
    </View>
  );
};

export default AddressSelect;
