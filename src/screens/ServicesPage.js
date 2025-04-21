import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const services = [
  {
    id: "1",
    title: "Oto360",
    description:
      "Araç Alım/Satım işlemlerinizde İhtiyacınız Olan Tüm Servisler sahibinden.com'da!",
    icon: "car",
  },
  {
    id: "2",
    title: "Emlak360",
    description:
      "Emlak Alım/Satım/Kiralama işlemlerinizde İhtiyacınız Olan Tüm Servisler sahibinden.com'da!",
    icon: "home",
  },
];

const ServiceItem = ({ title, description, icon }) => (
  <Pressable className="flex-row items-center justify-between bg-white p-3 border-b border-gray-200">
    <View className="flex-row items-start space-x-3 flex-1">
      <View className="bg-yellow-400 border rounded-full w-10 h-10 justify-center items-center">
        <FontAwesome5 name={icon} size={24} color="black" />
      </View>
      <View className="flex-1">
        <Text className="font-semibold text-base text-black">{title}</Text>
        <Text className="text-gray-500 text-sm">{description}</Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </Pressable>
);

const ServicesPage = () => {
  return (
    <View className="flex-1 bg-gray-100 mt-4">
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceItem
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        )}
      />
    </View>
  );
};

export default ServicesPage;
