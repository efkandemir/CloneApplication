import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

const AracModal = ({ visible, onClose, baslik }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log("baslik " + baslik);
  const options = [
    { id: "original", label: "Orijinal" },
    { id: "local_painted", label: "Lokal Boyalı" },
    { id: "painted", label: "Boyalı" },
    { id: "replaced", label: "Değişen" },
  ];

  const handleSave = () => {
    console.log("Seçilen:", selectedOption);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50 p-4">
        <View className="w-full max-w-md bg-white rounded-lg p-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">{baslik}</Text>

          <View className="space-y-2 mb-4">
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                className={`p-3 border rounded-lg ${
                  selectedOption === option.id
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300"
                }`}
                onPress={() => setSelectedOption(option.id)}
              >
                <Text className="text-gray-800">{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 font-medium mb-1">Detay</Text>
            <Text className="text-gray-400 italic">Seçiniz</Text>
          </View>

          <View className="flex-row justify-between border-t border-gray-200 pt-4">
            <TouchableOpacity
              className="px-6 py-2 border border-gray-300 rounded-lg"
              onPress={onClose}
            >
              <Text className="text-gray-700">Vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-6 py-2 bg-blue-600 rounded-lg"
              onPress={handleSave}
            >
              <Text className="text-white">Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AracModal;
