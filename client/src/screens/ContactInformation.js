import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CategoryRow from "../components/CategoryRow";
import StepProgress from "../components/StepProgress";
import { useNavigation } from "@react-navigation/native";
import CompletedPage from "./CompletedPage";

const options = [
  "Telefon ve Mesaj",
  "Telefon",
  "Mesaj",
  "Mesaj ve Geçici Numara Servisi",
  "Geçici Numara Servisi",
];

const ContactInformation = () => {
  const [selectedOption, setSelectedOption] = useState("Telefon ve Mesaj");
  const navigation = useNavigation();
  const handleCompleted = () => {
    navigation.navigate("CompletedPage");
  };
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">
        <CategoryRow
          title="Ad Soyad"
          description="Efkan D."
          icon="account-group"
          color="#4B5563"
          section="default"
        />

        <CategoryRow
          title="Cep Telefonu"
          description="+90-543-9329710"
          icon="phone"
          section="default"
        />

        <Text className="text-gray-700 font-semibold mt-6 mb-2">
          İLETİŞİM TERCİHLERİ
        </Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedOption(option)}
            className="flex-row items-center justify-between bg-gray-100 rounded-md p-3 mb-2"
          >
            <Text className="text-gray-800">{option}</Text>
            <View
              className={`w-5 h-5 rounded-full border-2 ${
                selectedOption === option
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-400"
              }`}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <StepProgress currentStep={4} totalSteps={5} onNext={handleCompleted} />
    </View>
  );
};

export default ContactInformation;
