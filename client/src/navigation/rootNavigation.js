import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MyTabs from "./Tab";
import CategoriesDetailsPage from "../screens/CategoriesDetailsPage";
import CustomHeader from "../components/CustomHeader";
import LoginPage from "../screens/LoginPage";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthProvider } from "../Context/authContext";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
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
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
