import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CategoryRow from "../components/CategoryRow";

const PostAdd = ({ route }) => {
  const { visible } = route.params || false;
  console.log(visible);
  const navigation = useNavigation();
  useEffect(() => {
    if (!visible) {
      navigation.navigate("LoginPage", { details: "postadd" });
    }
  }, [visible]);
  const categories = [
    {
      id: 1,
      title: "Emlak",
    },
    {
      id: 2,
      title: "Vasıta",
    },
    {
      id: 3,
      title: "Yedek Parça, Aksesuar, Donanım",
    },
    {
      id: 4,
      title: "İkinci El ve Sıfır Alışveriş",
    },
    {
      id: 5,
      title: "Yepy",
    },
    {
      id: 6,
      title: "İş Makineleri & Sanayi",
    },
    {
      id: 7,
      title: "Ustalar ve Hizmetler",
    },
    {
      id: 8,
      title: "Özel Ders Verenler",
    },
    {
      id: 9,
      title: "İş İlanları",
    },
    {
      id: 10,
      title: "Hayvanlar Alemi",
    },
    {
      id: 11,
      title: "Yardımcı Arayanlar",
    },
  ];

  const handleCategoryPress = (item) => {
    if (item.id === 1) {
      navigation.navigate("PostAddEmlak");
    } else if (item.id === 2) {
      navigation.navigate("PostAddVasita");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray ">
      <View className="bg-sahibindenblue">
        <View className="flex-row items-center bg-sahibindengray rounded-xl px-3 m-3">
          <AntDesign name="search1" size={20} color="gray" />
          <TextInput
            placeholder="Ne satıyorsun/kiralıyorsun? (Ör:Koltuk)"
            className="flex-1 pl-2 py-2"
            placeholderTextColor="#888"
          />
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="gray"
          />
        </View>
      </View>
      <StatusBar style="dark" backgroundColor="#185e91" translucent={false} />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View className="bg-white ">
            <TouchableOpacity onPress={() => handleCategoryPress(item)}>
              <CategoryRow
                title={item.title}
                icon={item.icon}
                description={item.description}
                color={item.color}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PostAdd;
