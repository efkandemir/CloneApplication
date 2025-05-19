import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";

const emlakData = [
  { title: "Tüm Emlak İlanları", description: "(1.195.184)", color: "#4CAF50" },
  { title: "Konut", description: "(741.547)", color: "#4CAF50" },
  { title: "İş Yeri", description: "(128.788)", color: "#2196F3" },
  { title: "Arsa", description: "(310.363)", color: "#FF9800" },
  { title: "Konut Projeleri", description: "(1.341)", color: "#9C27B0" },
  { title: "Bina", description: "(10.414)", color: "#607D8B" },
  { title: "Devre Mülk", description: "(2.399)", color: "#E91E63" },
  { title: "Turistik Tesis", description: "(1.708)", color: "#00BCD4" },
];

const vasitaData = [
  { title: "Tüm Vasıta İlanları", description: "(846.488)" },
  { title: "Otomobil", description: "(431.338)" },
  { title: "Arazi, SUV & Pickup", description: "(89.094)" },
  { title: "Elektrikli Araçlar", description: "(8.765)" },
  { title: "Motosiklet", description: "(133.799)" },
  { title: "Minivan & Panelvan", description: "(87.686)" },
  { title: "Ticari Araçlar", description: "(59.367)" },
  { title: "Kiralık Araçlar", description: "(10.233)" },
  { title: "Deniz Araçları", description: "(10.354)" },
  { title: "Hasarlı Araçlar", description: "(4.622)" },
  { title: "Karavan", description: "(5.633)" },
  { title: "Klasik Araçlar", description: "(1.910)" },
  { title: "Hava Araçları", description: "(23)" },
  { title: "ATV", description: "(2.965)" },
  { title: "UTV", description: "(504)" },
  { title: "Engelli Plakalı Araçlar", description: "(209)" },
];

const EmlakScreen = () => {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(index + ".index seçildi");
      }}
    >
      <CategoryRow
        title={item.title}
        description={item.description}
        icon=""
        section="vasitaoremlak"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={emlakData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `emlak-${index}`}
        contentContainerStyle={{ backgroundColor: "white" }}
      />
    </SafeAreaView>
  );
};

const VasitaScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        if (item.title === "Otomobil") {
          navigation.navigate("OtomobilDetails");
        } else {
          console.log(item.title + " tıklandı");
        }
      }}
    >
      <CategoryRow
        title={item.title}
        description={item.description}
        icon=""
        color={item.color}
        section="vasitaoremlak"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={vasitaData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `vasita-${index}`}
        contentContainerStyle={{ backgroundColor: "white" }}
      />
    </SafeAreaView>
  );
};

export { EmlakScreen, VasitaScreen };
