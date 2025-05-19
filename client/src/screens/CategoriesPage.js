import {
  View,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";

const CategoriesPage = ({ route }) => {
  const { showModal } = route.params || {};
  console.log(showModal);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    if (showModal) {
      setModalVisible(true);
    }
  }, [showModal]);
  const categories = [
    {
      id: 1,
      title: "Emlak",
      icon: "home",
      color: "#e74c3c",
      description: "Konut, İş Yeri, Arsa, Konut Projeleri, Bina, Devre Mülk",
    },
    {
      id: 2,
      title: "Vasıta",
      icon: "car",
      color: "#3498db",
      description:
        "Otomobil, Arazi, SUV & Pickup, Elektrikli Araçlar, Motosiklet",
    },
    {
      id: 3,
      title: "Yedek Parça, Aksesuar, Donanım",
      icon: "car-wrench",
      color: "#27ae60",
      description: "Otomotiv Ekipmanları, Motosiklet Ekipmanları, Deniz ..",
    },
    {
      id: 4,
      title: "İkinci El ve Sıfır Alışveriş",
      icon: "shopping",
      color: "#f39c12",
      description: "Bilgisayar, Cep Telefonu & Aksesuarlar, Elektronik",
    },
    {
      id: 5,
      title: "Yepy",
      icon: "recycle",
      color: "#9b59b6",
      description: "Yepyenilenmiş teknolojik cihazlar",
    },
    {
      id: 6,
      title: "İş Makineleri & Sanayi",
      icon: "tools",
      color: "#16a085",
      description: "İş Makineleri, Tarım Makineleri, Sanayi, Elektrik & Enerji",
    },
    {
      id: 7,
      title: "Ustalar ve Hizmetler",
      icon: "account-wrench",
      color: "#e67e22",
      description: "Ev Tadilat & Dekorasyon, Nakliye, Araç Servis & Bakım",
    },
    {
      id: 8,
      title: "Özel Ders Verenler",
      icon: "school",
      color: "#2c3e50",
      description: "Lise & Üniversite, İlkokul & Ortaokul, Yabancı Dil",
    },
    {
      id: 9,
      title: "İş İlanları",
      icon: "briefcase",
      color: "#c0392b",
      description: "Avukatlık, Eğitim, Eğlence, Sağlık, Muhasebe",
    },
    {
      id: 10,
      title: "Hayvanlar Alemi",
      icon: "paw",
      color: "#8e44ad",
      description: "Evcil Hayvanlar, Akvaryum Balıkları, Aksesuarlar",
    },
    {
      id: 11,
      title: "Yardımcı Arayanlar",
      icon: "account-group",
      color: "#7f8c8d",
      description: "Bebek & Çocuk Bakıcısı, Yaşlı & Hasta Bakıcısı, Temizlik",
    },
  ];
  const handleCategoryPress = (item) => {
    if (item.id === 1) {
      navigation.navigate("EmlakScreen");
    } else if (item.id === 2) {
      navigation.navigate("VasitaScreen");
    } else {
      console.log(item.id);
    }
  };

  const renderHeader = () => (
    <View className="bg-white">
      <View className="flex-row items-center bg-sahibindengray rounded-xl px-3 m-2">
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 bg-black/50 justify-center items-center">
            <View className="bg-white p-6 rounded-2xl w-4/5 items-center">
              <Text className="text-xl font-bold mb-4 text-center">
                Oturum Kapalı
              </Text>
              <Text className="items-center justify-center">
                Bu özellik uygulamaya giriş yapmayı gerektirir.
              </Text>
              <View className="h-[1px] w-full bg-gray-500 " />
              <TouchableOpacity
                className="bg-white px-6 py-3 rounded-xl mt-4"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-sahibindenblue font-semibold">Tamam</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          placeholder="Kelime veya ilan No. ile ara"
          className="flex-1 pl-2 py-2 bg"
          placeholderTextColor="#888"
        />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="gray"
        />
      </View>
      <View className="w-full h-px bg-dividercolor my-[3px]" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray p-2">
      <StatusBar style="dark" backgroundColor="#185e91" translucent={false} />
      <FlatList
        data={categories}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <View className="bg-white">
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

export default CategoriesPage;
