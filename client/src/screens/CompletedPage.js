import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CompletedPage = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <View className="w-28 h-28 rounded-full bg-green-600 justify-center items-center shadow-lg shadow-green-400/50 mb-8">
        <MaterialIcons name="check" size={64} color="white" />
      </View>
      <Text className="text-3xl font-bold text-green-800 mb-2">Tebrikler!</Text>
      <Text className="text-center text-green-700 text-lg">
        İlanınız başarıyla alınmıştır.
      </Text>
    </View>
  );
};

export default CompletedPage;
