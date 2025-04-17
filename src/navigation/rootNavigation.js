import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MyTabs from './Tab'; // yukarıdaki tab navigatör bileşeni
import CategoriesDetailsPage from '../screens/CategoriesDetailsPage';
import CustomHeader from '../components/CustomHeader';

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
                <Stack.Screen
                    name="CategoriesDetails"
                    component={CategoriesDetailsPage}
                    options={{
                        headerTitle: () => <CustomHeader title="İlan Detayı" showicon={false} showTwoIcons={true} showCarIcon={false} />,
                        headerStyle: {
                            backgroundColor: '#185e91',
                        },
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }} // çünkü her tab ekranı kendi header'ını gösterecek
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
