import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";

const markalar = [
  { title: "Audi", icon: "Audi", description: "(15.905)" },
  { title: "BMW", icon: "BMW", description: "(12.954)" },
  { title: "BYD", icon: "BYD", description: "(1.245)" },
  { title: "Citroen", icon: "Citroen", description: "(8.763)" },
  { title: "Cupra", icon: "Cupra", description: "(2.345)" },
  { title: "Dacia", icon: "Dacia", description: "(6.789)" },
  { title: "DSAutomobiles", icon: "DSAutomobiles", description: "(1.234)" },
  { title: "Ferrari", icon: "Ferrari", description: "(567)" },
  { title: "Fiat", icon: "Fiat", description: "(10.987)" },
  { title: "Ford", icon: "Ford", description: "(23.456)" },
  { title: "Honda", icon: "Honda", description: "(7.890)" },
  { title: "Hyundai", icon: "Hyundai", description: "(18.765)" },
  { title: "Jaguar", icon: "Jaguar", description: "(3.456)" },
  { title: "Kia", icon: "Kia", description: "(14.321)" },
  { title: "Lexus", icon: "Lexus", description: "(2.109)" },
  { title: "Maserati", icon: "Maserati", description: "(876)" },
  { title: "MercedesBenz", icon: "MercedesBenz", description: "(25.678)" },
  { title: "Mini", icon: "Mini", description: "(5.432)" },
  { title: "Opel", icon: "Opel", description: "(12.345)" },
  { title: "Peugeot", icon: "Peugeot", description: "(9.876)" },
  { title: "Porsche", icon: "Porsche", description: "(4.321)" },
  { title: "Renault", icon: "Renault", description: "(21.098)" },
  { title: "Seat", icon: "Seat", description: "(7.654)" },
  { title: "Skoda", icon: "Skoda", description: "(16.543)" },
  { title: "Suzuki", icon: "Suzuki", description: "(6.789)" },
  { title: "Tesla", icon: "Tesla", description: "(3.210)" },
  { title: "Toyota", icon: "Toyota", description: "(19.876)" },
  { title: "Volkswagen", icon: "Volkswagen", description: "(28.765)" },
  { title: "Volvo", icon: "Volvo", description: "(8.901)" },
];

const OtomobilPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={markalar}
        keyExtractor={(item, index) => `vasita-${index}`}
        renderItem={({ item, index }) => (
          <View className="bg-white">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OtomobilModel", { marka: item.title })
              }
            >
              <CategoryRow
                title={item.title}
                description={item.description}
                color={item.color}
                section="vasitaoremlak"
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default OtomobilPage;
