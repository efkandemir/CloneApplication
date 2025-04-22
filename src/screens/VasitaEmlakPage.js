import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CategoryRow from "../components/CategoryRow";

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
  { title: "Tüm Vasıta İlanları", description: "(846.488)", color: "#F44336" },
  { title: "Otomobil", description: "(431.338)", color: "#F44336" },
  { title: "Arazi, SUV & Pickup", description: "(89.094)", color: "#673AB7" },
  { title: "Elektrikli Araçlar", description: "(8.765)", color: "#4CAF50" },
  { title: "Motosiklet", description: "(133.799)", color: "#FF5722" },
  { title: "Minivan & Panelvan", description: "(87.686)", color: "#2196F3" },
  { title: "Ticari Araçlar", description: "(59.367)", color: "#607D8B" },
  { title: "Kiralık Araçlar", description: "(10.233)", color: "#9C27B0" },
  { title: "Deniz Araçları", description: "(10.354)", color: "#00BCD4" },
  { title: "Hasarlı Araçlar", description: "(4.622)", color: "#795548" },
  { title: "Karavan", description: "(5.633)", color: "#8BC34A" },
  { title: "Klasik Araçlar", description: "(1.910)", color: "#FFC107" },
  { title: "Hava Araçları", description: "(23)", color: "#9E9E9E" },
  { title: "ATV", description: "(2.965)", color: "#CDDC39" },
  { title: "UTV", description: "(504)", color: "#FF9800" },
  { title: "Engelli Plakalı Araçlar", description: "(209)", color: "#3F51B5" },
];

const EmlakScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {emlakData.map((item, index) => (
          <TouchableOpacity
            key={`emlak-${index}`}
            onPress={() => console.log(item.title + " tıklandı")}
          >
            <CategoryRow
              title={item.title}
              description={item.description}
              icon=""
              color={item.color}
              section="vasitaoremlak"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const VasitaScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {vasitaData.map((item, index) => (
          <TouchableOpacity
            key={`vasita-${index}`}
            onPress={() => console.log(item.title + " tıklandı")}
          >
            <CategoryRow
              title={item.title}
              description={item.description}
              icon=""
              color={item.color}
              section="vasitaoremlak"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export { EmlakScreen, VasitaScreen };
