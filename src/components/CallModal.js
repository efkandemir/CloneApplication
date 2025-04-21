import React from "react";
import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

const CallModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white rounded-t-2xl p-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">İletişim</Text>
          <Pressable onPress={onClose} className="p-2">
            <Ionicons name="close" size={24} color="#6b7280" />
          </Pressable>
        </View>

        <Text className="text-gray-600 mb-6">
          Satıcıyı aramak istediğinize emin misiniz?
        </Text>

        <View className="flex-row justify-end space-x-3">
          <Pressable
            className="px-4 py-2 border border-gray-300 rounded-lg"
            onPress={onClose}
          >
            <Text className="text-gray-700 font-medium">Vazgeç</Text>
          </Pressable>
          <Pressable
            className="px-4 py-2 bg-blue-500 rounded-lg"
            onPress={onConfirm}
          >
            <Text className="text-white font-medium">Ara</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CallModal;
