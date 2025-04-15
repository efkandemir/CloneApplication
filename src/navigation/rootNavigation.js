import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MyTabs from './Tab'; // yukarıdaki tab navigatör bileşeni

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
                    options={{ headerShown: false }} // çünkü her tab ekranı kendi header'ını gösterecek
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
