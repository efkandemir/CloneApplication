import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CategoryRow from "../components/CategoryRow";
import { useNavigation } from "@react-navigation/native";

const PostAddOtoYear = () => {
  const navigation = useNavigation();
  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
    2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989,
    1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977,
    1976, 1975, 1974, 1973, 1972, 1971, 1970,
  ];

  return (
    <SafeAreaView className="flex-1 bg-sahibindengray">
      <FlatList
        data={years}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View className="bg-white">
            <TouchableOpacity
              className=" px-1 m-1 rounded-lg"
              onPress={() => {
                navigation.navigate("Main", {
                  screen: "İlan Ver",
                  params: {
                    screen: "PostAddOtoModel",
                    params: { year: item },
                  },
                });
              }}
            >
              <CategoryRow title={item} />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PostAddOtoYear;
