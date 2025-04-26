import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { UsePreventGoBack } from "../components/UsePreventGoBack";

const RegisterScreen = () => {
  UsePreventGoBack();
  const navigation = useNavigation();
  const [agreed, setAgreed] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray px-5 py-8">
      <Pressable
        className="absolute top-12 right-4"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text className="text-black text-2xl">✕</Text>
      </Pressable>
      <View className=" mx-4 my-16 bg-sahibindengray">
        <Text className="text-xl font-bold mb-5">Hesap aç</Text>

        <TextInput
          placeholder="E-posta adresi"
          className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
          onChangeText={setMail}
          value={mail}
        />

        <View className="flex-row space-x-2 mb-3">
          <TextInput
            placeholder="Ad"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            placeholder="Soyad"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
            onChangeText={setSurname}
            value={surname}
          />
        </View>

        <TextInput
          placeholder="Şifre"
          secureTextEntry
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
          onChangeText={setPassword}
          value={password}
        />
        {console.log(password)}

        <View className="mb-4 space-y-1">
          <Text className="text-sm text-gray-700">✖ En az 1 küçük harf</Text>
          <Text className="text-sm text-gray-700">✖ En az 1 büyük harf</Text>
          <Text className="text-sm text-gray-700">✖ En az 8 karakter</Text>
          <Text className="text-sm text-gray-700">✖ En az 1 rakam</Text>
          <Text className="text-sm text-green-600">
            ✔ Ad, soyad ve e-posta adresinizi içeremez.
          </Text>
          <Text className="text-sm text-green-600">
            ✔ 3 aynı harf veya rakam yan yana kullanılamaz.
          </Text>
        </View>

        <Pressable
          onPress={() => setAgreed(!agreed)}
          className="flex-row items-center mb-3"
        >
          <Icon
            name={agreed ? "checkbox" : "square-outline"}
            size={20}
            color={agreed ? "#0a84ff" : "#ccc"}
          />
          <Text className="ml-2 text-sm text-gray-700">
            Bireysel Hesap Sözleşmesi ve Ekleri’ni kabul ediyorum.
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setMarketing(!marketing)}
          className="flex-row items-center mb-6"
        >
          <Icon
            name={marketing ? "checkbox" : "square-outline"}
            size={20}
            color={marketing ? "#0a84ff" : "#ccc"}
          />
          <Text className="ml-2 text-sm text-gray-700">
            İletişim bilgilerime kampanya, tanıtım ve reklam içerikli ileti
            gönderilmesine izin veriyorum.
          </Text>
        </Pressable>

        <TouchableOpacity className="bg-blue-600 rounded-lg py-3">
          <Text className="text-white text-center font-semibold">Hesap aç</Text>
        </TouchableOpacity>

        <Text className="text-center text-sm text-gray-700 mt-5">
          Zaten hesabın var mı? <Text className="text-blue-600">Giriş Yap</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
