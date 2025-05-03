import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
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

const PostAddEmlak = () => {
  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={emlakData}
        keyExtractor={(item, index) => `emlak-${index}`}
        renderItem={({ item, index }) => (
          <View className="bg-white">
            <TouchableOpacity onPress={() => {}}>
              <CategoryRow
                title={item.title}
                description={item.description}
                icon=""
                section="vasitaoremlak"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const PostAddVasita = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={vasitaData}
        keyExtractor={(item, index) => `vasita-${index}`}
        ListHeaderComponent={
          <View className="px-4 bg-sahibindengray border-b border-gray-200 h-10 justify-end">
            <Text className="text-xs font-bold text-sahibindenstatusgrey pb-1">
              VASITA
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View className="bg-white">
            <TouchableOpacity
              onPress={() => {
                if (item.title === "Otomobil") {
                  navigation.navigate("PostAddYear");
                } else {
                  console.log(item.title + " tıklandı");
                }
              }}
            >
              <CategoryRow
                title={item.title}
                description={item.description}
                icon=""
                section="vasitaoremlak"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export { PostAddEmlak, PostAddVasita };
