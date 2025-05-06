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
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isDistrictsLoaded, setIsDistrictsLoaded] = useState(false);

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedCity = await AsyncStorage.getItem("selectedCity");
        const savedDistrict = await AsyncStorage.getItem("selectedDistrict");

        if (savedCity) {
          setSelectedCity(savedCity);
        }
        if (savedDistrict) {
          setSelectedDistrict(savedDistrict);
        }
      } catch (e) {
        console.error("Data loading error:", e);
      }
    };
    loadSavedData();
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
      if (value === "ilçe" && selectedCity && !isDistrictsLoaded) {
        try {
          const response = await fetch(
            "https://raw.githubusercontent.com/KeremHavlc/turkiye-adresler-nodejs/refs/heads/master/turkiye-adresler/ilceler.json"
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
          console.error("API error:", err);
        }
      }
    };

    fetchDistricts();
  }, [value, selectedCity, isDistrictsLoaded]);

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      const district = selectedDistrict || route.params?.selectedDistrict;
      if (value === "mahalle" && selectedCity && district) {
        try {
          const response = await fetch(
            `https://turkiyeapi.dev/api/v1/neighborhoods?district=${encodeURIComponent(
              district
            )}`
          );
          const data = await response.json();
          setNeighborhoods(data.data || []);
        } catch (err) {
          console.error("Neighborhood data error:", err);
        }
      }
    };

    fetchNeighborhoods();
  }, [value, selectedCity, selectedDistrict, route.params?.selectedDistrict]);

  const ItemDivider = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: -4 }} />
  );

  const handleSelectCity = async (city) => {
    try {
      await AsyncStorage.setItem("selectedCity", city);
      setSelectedCity(city);
      await AsyncStorage.removeItem("selectedDistrict");
      setSelectedDistrict("");
      navigation.navigate("AddressSelect", {
        selectedCity: city,
      });
    } catch (e) {
      console.error("City save error:", e);
    }
  };

  const handleSelectDistrict = async (district) => {
    try {
      await AsyncStorage.setItem("selectedDistrict", district);
      setSelectedDistrict(district);
      navigation.navigate("AddressSelect", {
        selectedCity: selectedCity,
        selectedDistrict: district,
      });
    } catch (e) {
      console.error("District save error:", e);
    }
  };

  const handleSelectNeighborhood = async (neighborhood) => {
    try {
      await AsyncStorage.setItem("selectedNeighborhood", neighborhood);
      navigation.navigate("AddressSelect", {
        selectedCity: selectedCity,
        selectedDistrict: selectedDistrict,
        selectedNeighborhood: neighborhood,
      });
    } catch (e) {
      console.error("Neighborhood save error:", e);
    }
  };

  return (
    <View className="px-2 py-1">
      {value === "il" ? (
        <FlatList
          data={cities}
          keyExtractor={(item) =>
            item.sehir_id?.toString() || Math.random().toString()
          }
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectCity(item.sehir_adi)}>
              <CategoryRow title={item.sehir_adi} section="vasitaoremlak" />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      ) : value === "ilçe" ? (
        <FlatList
          data={districts}
          keyExtractor={(item) =>
            item.ilce_id?.toString() || Math.random().toString()
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectDistrict(item.ilce_adi)}
            >
              <CategoryRow title={item.ilce_adi} section="vasitaoremlak" />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      ) : value === "mahalle" ? (
        <FlatList
          data={neighborhoods}
          keyExtractor={(item) =>
            item?.id?.toString() ||
            item?.name?.toString() ||
            Math.random().toString()
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectNeighborhood(item.name)}
            >
              <CategoryRow title={item.name} section="vasitaoremlak" />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      ) : null}
    </View>
  );
};

export default AddressDetailsSelect;
