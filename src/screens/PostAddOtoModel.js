import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CategoryRow from "../components/CategoryRow";

const PostAddOtoModel = ({ route }) => {
  const { year } = route.params;
  const markalar = [
    { title: "Audi" },
    { title: "BMW" },
    { title: "BYD" },
    { title: "Citroen" },
    { title: "Cupra" },
    { title: "Dacia" },
    { title: "DSAutomobiles" },
    { title: "Ferrari" },
    { title: "Fiat" },
    { title: "Ford" },
    { title: "Honda" },
    { title: "Hyundai" },
    { title: "Jaguar" },
    { title: "Kia" },
    { title: "Lexus" },
    { title: "Maserati" },
    { title: "MercedesBenz" },
    { title: "Mini" },
    { title: "Opel" },
    { title: "Peugeot" },
    { title: "Porsche" },
    { title: "Renault" },
    { title: "Seat" },
    { title: "Skoda" },
    { title: "Suzuki" },
    { title: "Tesla" },
    { title: "Toyota" },
    { title: "Volkswagen" },
    { title: "Volvo" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={markalar}
        keyExtractor={(item, index) => `marka-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(year + " model  " + item.title + " marka otomobil");
            }}
          >
            <CategoryRow title={item.title} section="vasitaoremlak" />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PostAddOtoModel;
