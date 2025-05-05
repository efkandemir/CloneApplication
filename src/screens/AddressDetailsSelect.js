import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddressDetailsSelect = ({ route }) => {
  const navigation = useNavigation();
  const { value } = route.params;
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [isDistrictsLoaded, setIsDistrictsLoaded] = useState(false);


  useEffect(() => {
    const loadSavedCity = async () => {
      try {
        const savedCity = await AsyncStorage.getItem("selectedCity");
        if (savedCity) {
          setSelectedCity(savedCity);
        }
      } catch (e) {
        console.error("Şehir yüklenirken hata:", e);
      }
    };
    loadSavedCity();
  }, []);

  useEffect(() => {
    if (value === "il") {
      fetch(
        "https://raw.githubusercontent.com/KeremHavlc/turkiye-adresler-nodejs/refs/heads/master/turkiye-adresler/sehirler.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setCities(data);
        })
        .catch((err) => console.error(err));
    }
  }, [value]);


  useEffect(() => {
    const fetchDistricts = async () => {
      console.log("Value:", value);
      console.log("Selected City:", selectedCity);

      if (value === "ilçe" && selectedCity && !isDistrictsLoaded) {
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/KeremHavlc/turkiye-adresler-nodejs/refs/heads/master/turkiye-adresler/ilceler.json`
          );
          const data = await response.json();
          const allDistricts = Object.values(data).flat();

          const filtered = allDistricts.filter((district) => {
            return (
              district.sehir_adi.toLowerCase() === selectedCity.toLowerCase()
            );
          });

          setDistricts(filtered);
          setIsDistrictsLoaded(true);
        } catch (err) {
          console.error("API hatası:", err);
        }
      }
    };

    fetchDistricts();
  }, [value, selectedCity, isDistrictsLoaded]);

  const ItemDivider = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: -4 }} />
  );

  const handleSelectCity = async (city) => {
    try {
      await AsyncStorage.setItem("selectedCity", city);
      setSelectedCity(city);
      navigation.navigate("AddressSelect", {
        selectedCity: city,
      });
    } catch (e) {
      console.error("Şehir kaydedilirken hata:", e);
    }
  };

  const handleSelectDistrict = (district) => {
    navigation.navigate("AddressSelect", {
      selectedCity: selectedCity,
      selectedDistrict: district,
    });
  };

  return (
    <View className="px-2 py-1">
      {value === "il" ? (
        <FlatList
          data={cities}
          keyExtractor={(item) => item.sehir_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectCity(item.sehir_adi)}>
              <CategoryRow title={item.sehir_adi} section="vasitaoremlak" />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      ) : (
        <FlatList
          data={districts}
          keyExtractor={(item) => item.ilce_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectDistrict(item.ilce_adi)}
            >
              <CategoryRow title={item.ilce_adi} section="vasitaoremlak" />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      )}
    </View>
  );
};

export default AddressDetailsSelect;
