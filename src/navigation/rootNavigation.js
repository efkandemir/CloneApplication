import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MyTabs from "./Tab";
import CategoriesDetailsPage from "../screens/CategoriesDetailsPage";
import CustomHeader from "../components/CustomHeader";
import LoginPage from "../screens/LoginPage";
import RegisterScreen from "../screens/RegisterScreen";
import PostAdd from "../screens/PostAdd";
import { PostAddEmlak } from "../screens/PostAddEmlakVasita";
import { PostAddVasita } from "../screens/PostAddEmlakVasita";
import PostAddOtoYear from "../screens/PostAddOtoYear";
import PostAddOtoModel from "../screens/PostAddOtoModel";
import PostAddModelSelect from "../screens/PostAddModelSelect";
import PostAddCarDetails from "../screens/PostAddCarDetails";

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
          options={{ headerShown: false, gestureEnabled: false }}
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
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostAdd"
          component={PostAdd}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddEmlak"
          component={PostAddEmlak}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddVasita"
          component={PostAddVasita}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddOtomobil"
          component={PostAddOtoYear}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddOtoModel"
          component={PostAddOtoModel}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddModelSelect"
          component={PostAddModelSelect}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#185e91",
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="PostAddCarDetails"
          component={PostAddCarDetails}
          options={{
            headerShown: false,
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
