import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExitModal = ({ visible, onCancel }) => {
  const navigation = useNavigation();
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-[85%] bg-white rounded-xl p-5">
          <Text className="text-lg font-semibold text-center mb-2">
            İlan verme adımından çıkmak üzeresiniz
          </Text>
          <Text className="text-base text-center text-gray-700 mb-6">
            İlan verme adımından çıkmak istediğinize emin misiniz?
          </Text>

          <View className="flex-row justify-between mx-8">
            <TouchableOpacity
              className="bg-white px-8 py-2  border-sahibindenblue border"
              onPress={() => {
                navigation.navigate("Main", {
                  screen: "Arama",
                  params: {
                    screen: "CategoriesPage",
                  },
                });
                onCancel();
              }}
            >
              <Text className="text-sahibindentextblue font-medium">Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border bg-sahibindenblue px-8 py-2 mr-2"
              onPress={() => {
                onCancel();
              }}
            >
              <Text className="text-white font-medium">Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
