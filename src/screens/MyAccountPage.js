import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SectionHeader = ({ title }) => (
  <View className="bg-sahibindengray px-4 py-2">
    <Text className="text-sahibindentextgrey font-semibold text-xs uppercase">
      {title}
    </Text>
  </View>
);

const MenuItem = ({ label, isNew }) => (
  <TouchableOpacity className="flex-row items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
    <Text className="text-black">{label}</Text>
    <View className="flex-row items-center space-x-1">
      {isNew && (
        <View className="bg-red-500 rounded px-1.5 py-0.5">
          <Text className="text-white text-[10px] font-bold">yeni</Text>
        </View>
      )}
      <Ionicons name="chevron-forward" size={18} color="#ccc" />
    </View>
  </TouchableOpacity>
);

const MyAccountPage = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-row items-center justify-between bg-white p-3 border-b border-gray-200 mt-6">
        <Text className="text-blue-500 ml-16">
          Güncel Uygulama Versiyonunu İndir
        </Text>
        <View className="bg-red-500 rounded px-1.5 py-1 mr-14">
          <Text className="text-white text-[10px] font-bold ">yeni</Text>
        </View>
      </View>

      <View className="mt-5">
        <MenuItem label="Hesap Aç" />
        <MenuItem label="Giriş Yap" />
      </View>

      <View className="mt-5">
        <SectionHeader title="İlan Yönetimi" />
        <MenuItem label="Yayında Olanlar" />
        <MenuItem label="Yayında Olmayanlar" />
        <MenuItem label="İlana QR Kod ile Fotoğraf Ekleme" />
      </View>

      <View className="mt-5">
        <SectionHeader title="Mesajlar ve Bilgilendirmeler" />
        <MenuItem label="Mesajlar" />
        <MenuItem label="Bilgilendirmeler" />
        <MenuItem label="Ürün Tekliflerim" isNew />
      </View>

      <View className="mt-5">
        <SectionHeader title="Favoriler" />
        <MenuItem label="Favori İlanlar" />
        <MenuItem label="Favori Aramalar" />
        <MenuItem label="Favori Satıcılar" />
      </View>

      <View className="mt-5">
        <MenuItem label="Size Özel İlanlar" />
        <MenuItem label="Karşılaştırma Listesi" />
      </View>

      <View className="mt-5">
        <SectionHeader title="Diğer" />
        <MenuItem label="Ayarlar" />
        <MenuItem label="Yardım ve İşlem Rehberi" />
        <MenuItem label="Sorun / Öneri Bildirimi" />
        <MenuItem label="Hakkında" />
        <MenuItem label="Kişisel Verilerin Korunması" />
        <MenuItem label="Çerezler" />
      </View>
    </ScrollView>
  );
};

export default MyAccountPage;
