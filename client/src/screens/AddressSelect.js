import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { ChevronRight, HelpCircle } from "lucide-react-native";
import StepProgress from "../components/StepProgress";
import { useNavigation } from "@react-navigation/native";
import { AddCarContext } from "../Context/addcarContext";

const AddressSelect = ({ route }) => {
  const {
    selectedCity = "",
    selectedDistrict = "",
    selectedNeighborhood = "",
  } = route.params || {};
  const navigation = useNavigation();
  const { carData, setCarData } = useContext(AddCarContext);

  const cityDisplay = selectedCity || "İl Seçiniz";
  const districtDisplay = selectedDistrict || "İlçe Seçiniz";
  const neighborhoodDisplay = selectedNeighborhood || "Mahalle Seçiniz";

  // Eğer tüm adres bileşenleri seçilmişse, context'e yaz
  useEffect(() => {
    if (selectedCity && selectedDistrict && selectedNeighborhood) {
      setCarData((prev) => ({
        ...prev,
        city: selectedCity,
        district: selectedDistrict,
        neighborhood: selectedNeighborhood,
      }));
    }
  }, [selectedCity, selectedDistrict, selectedNeighborhood]);

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
            !selectedCity ? "opacity-50" : ""
          }`}
          onPress={() => {
            if (selectedCity) {
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
            !selectedDistrict ? "opacity-50" : ""
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

      <StepProgress
        currentStep={2}
        totalSteps={5}
        onNext={() => {
          navigation.navigate("PhotoVideoSelect");
        }}
      />
    </View>
  );
};

export default AddressSelect;
