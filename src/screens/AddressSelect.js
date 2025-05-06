import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react-native";
import StepProgress from "../components/StepProgress";
import { useNavigation } from "@react-navigation/native";

const AddressSelect = ({ route }) => {
  const { selectedCity } = route.params || { selectedCity: "" };
  const { selectedDistrict } = route.params || { selectedDistrict: "" };
  const { selectedNeighborhood } = route.params || { selectedNeighborhood: "" };

  const navigation = useNavigation();


  const cityDisplay = selectedCity || "İl Seçiniz";
  const districtDisplay = selectedDistrict || "İlçe Seçiniz";
  const neighborhoodDisplay = selectedNeighborhood || "Mahalle Seçiniz";

  return (
    <View className="flex-1 bg-gray-100 relative">
      <ScrollView className="flex-1 py-6">
        <Text className="text-gray-500 font-semibold text-sm mb-2 ml-3">
          ADRES SEÇİMİ
        </Text>

        <TouchableOpacity className="bg-white border-b border-gray-300 px-4 h-10 flex-row justify-between items-center">
          <Text className="text-gray-600">Ülke</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">Türkiye</Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          className="bg-white border-b border-gray-300 px-4 h-10 flex-row justify-between items-center"
          onPress={() => {
            navigation.navigate("AddressDetailsSelect", { value: "il" });
          }}
        >
          <Text className="text-gray-600">İl</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">{cityDisplay}</Text>
            <HelpCircle size={16} color="#4b5563" />
            <ChevronRight size={16} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-white border-b border-gray-300 px-4 h-10 flex-row justify-between items-center ${
            !selectedCity && !selectedDistrict ? "opacity-50" : ""
          }`}
          onPress={() => {
            if (selectedCity || !selectedCity) {
              navigation.navigate("AddressDetailsSelect", { value: "ilçe" });
            }
          }}
          disabled={!selectedCity}
        >
          <Text className="text-gray-600">İlçe</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">{districtDisplay}</Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-white border-b border-gray-300 px-4 py-3 flex-row justify-between items-center ${
            !selectedDistrict && !selectedCity ? "opacity-50" : ""
          }`}
          onPress={() => {
            if (selectedDistrict) {
              navigation.navigate("AddressDetailsSelect", { value: "mahalle" });
            }
          }}
          disabled={!selectedDistrict}
        >
          <Text className="text-gray-600">Mahalle</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-black font-medium">
              {neighborhoodDisplay}
            </Text>
            <ChevronRight size={16} color="gray" />
          </View>
        </TouchableOpacity>

        <View className="w-full h-20 bg-white justify-center px-4">
          <TouchableOpacity className="border border-sahibindenblue items-center h-10 justify-center">
            <Text className="text-sahibindenblue font-semibold">
              Haritada İşaretle
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StepProgress currentStep={2} totalSteps={5} onNext={() => {}} />
    </View>
  );
};

export default AddressSelect;
