import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MyTabs from "./Tab"; 
import CategoriesDetailsPage from "../screens/CategoriesDetailsPage";
import CustomHeader from "../components/CustomHeader";
import { EmlakScreen, VasitaScreen } from "../screens/VasitaEmlakPage";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="CategoriesDetails"
          component={CategoriesDetailsPage}
          options={{
            headerTitle: () => (
              <CustomHeader
                title="İlan Detayı"
                showicon={false}
                showTwoIcons={true}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
