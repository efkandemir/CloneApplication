import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmlakScreen, VasitaScreen } from "../screens/VasitaEmlakPage";
import OtomobilPage from "../screens/OtomobilPage";
import CustomHeader from "../components/CustomHeader";
import CategoriesPage from "../screens/CategoriesPage";

const Stack = createNativeStackNavigator();
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CategoriesPage">
      <Stack.Screen
        name="CategoriesPage"
        component={CategoriesPage}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Arama"
              showicon={true}
              showTwoIcons={false}
              showCarIcon={false}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="EmlakScreen"
        component={EmlakScreen}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Emlak"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="VasitaScreen"
        component={VasitaScreen}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Vasıta"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="OtomobilDetails"
        component={OtomobilPage}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Otomobil"
              showicon={false}
              showTwoIcons={true}
              showCarIcon={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
