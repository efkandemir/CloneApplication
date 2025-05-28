import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import CategoryRow from "../components/CategoryRow";
import StepProgress from "../components/StepProgress";
import { useNavigation } from "@react-navigation/native";
import CompletedPage from "./CompletedPage";
import { AuthContext } from "../Context/authContext";
import { AddCarContext } from "../Context/addcarContext";

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
  const [state] = useContext(AuthContext);
  const user = state?.user;
  const { carData, setCarData } = useContext(AddCarContext);
  const handleCompleted = () => {
    navigation.navigate("CompletedPage");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">
        <CategoryRow
          title="Ad Soyad"
          description={`${user.name}  ${user.surname}`}
          icon="account-group"
          color="#4B5563"
          section="default"
        />

        <Text className="mt-4 mb-2 text-gray-700 font-semibold">
          Cep Telefonu
        </Text>

        <TextInput
          onChangeText={(text) => setCarData({ ...carData, phoneNumber: text })}
          value={carData.phoneNumber}
          placeholder="+90-5xx-xxxxxxx"
          keyboardType="phone-pad"
          className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
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
