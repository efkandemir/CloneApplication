import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Pressable
        className="absolute top-12 right-4"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-black text-2xl">✕</Text>
      </Pressable>

      <View className=" mx-4 my-16 bg-yellow-400">
        <Text className="text-xl font-bold">İlan vermek için</Text>
        <Text className="text-xl font-bold mb-6">Giriş yapın</Text>

        <CustomInput
          placeholder="E-posta adresi"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          showIcon
        />

        <TouchableOpacity className="mt-2 mb-4">
          <Text className="text-blue-600 text-right">Şifremi Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-600 py-4 rounded-md mb-4">
          <Text className="text-white text-center font-semibold">
            E-posta ile giriş yap
          </Text>
        </TouchableOpacity>

        <Text className="text-center mb-4">
          Henüz hesabın yok mu?{" "}
          <Text className="text-blue-600">Hesap aç ▸</Text>
        </Text>

        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">VEYA</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <View className="flex-row justify-between space-x-4 h-16 items-center">
          <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-md items-center bg-white">
            <Text>🔍 Google ile giriş yap</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-md items-center bg-white">
            <Text> Apple ile giriş yap</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xs text-gray-500 mt-6">
          Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde{" "}
          <Text className="text-blue-600">
            Bireysel Hesap Sözleşmesi ve Ekleri
          </Text>
          'ni kabul etmiş sayılırsınız.
        </Text>
        <Text className="text-xs text-gray-500 mt-2">
          Tarafınızca sağlanmış olan kişisel verileriniz hesap açma esnasında
          kimlik doğrulama tercihinize bağlı olarak Google veya Apple
          vasıtasıyla işlenebilecektir. Kişisel verilerin korunması hakkında
          detaylı bilgiye <Text className="text-blue-600">buradan</Text>{" "}
          ulaşabilirsiniz.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
