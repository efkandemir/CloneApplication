import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesPage from '../screens/CategoriesPage';
import CustomHeader from '../components/CustomHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ShowCasePage from '../screens/ShowCasePage';
import PostAd from '../screens/PostAd';
import ServicesPage from '../screens/ServicesPage';
import MyAccountPage from '../screens/MyAccountPage';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 80,
            },
            tabBarActiveTintColor: '#2c2c2c',
            tabBarInactiveTintColor: 'grey',
        }} initialRouteName='Arama'>
            <Tab.Screen
                name="Vitrin"
                component={ShowCasePage}
                options={{
                    headerTitle: () => <CustomHeader title="Arama" />,
                    headerStyle: {
                        backgroundColor: '#185e91',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="star-four-points" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Arama"
                component={CategoriesPage}
                options={{
                    headerTitle: () => <CustomHeader title="Arama" />,
                    headerStyle: {
                        backgroundColor: '#185e91',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="İlan Ver"
                component={PostAd}
                options={{
                    headerTitle: () => <CustomHeader title="Arama" />,
                    headerStyle: {
                        backgroundColor: '#185e91',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                backgroundColor: 'white', // Ovalin arka plan rengi
                                width: 45,
                                height: 40,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: -25, // Üstte görünmesi için
                            }}
                        >
                            <MaterialIcons name="add-circle" size={38} color="#185e91" />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Servisler"
                component={ServicesPage}
                options={{
                    headerTitle: () => <CustomHeader title="Profil" />,
                    headerStyle: {
                        backgroundColor: '#185e91',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="spinner-rotate-forward" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bana Özel"
                component={MyAccountPage}
                options={{
                    headerTitle: () => <CustomHeader title="Profil" />,
                    headerStyle: {
                        backgroundColor: '#185e91',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;
