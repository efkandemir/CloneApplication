import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const iconMap = {
    home: 'home',
    car: 'car',
    'car-wrench': 'car-wrench',
    shopping: 'shopping',
    recycle: 'recycle',
    tools: 'tools',
    'account-wrench': 'account-wrench',
    school: 'school',
    briefcase: 'briefcase',
    paw: 'paw',
    'account-group': 'account-group',
};

const CategoryRow = ({ title, icon, description, color }) => {
    return (
        <SafeAreaView className="flex-row items-center bg-sahibin rounded-lg pt-0 mb-2 h-[46px] m-2">
            <View className="w-9 h-9 items-center justify-center rounded-full mr-4" style={{
                backgroundColor: color
            }}>
                <MaterialCommunityIcons
                    name={iconMap[icon] || 'alert-circle-outline'} //varsayılan icon
                    size={25}
                    color="white"
                />
            </View>
            <View className="w-full">
                <Text className="text-lg font-normal">{title}</Text>
                <Text className="text-gray-500 text-xs mb-[2px]">{description}</Text>
                <View className="bg-sahibindengray w-full h-[2px]" />
            </View>

        </SafeAreaView>
    );
};

export default CategoryRow;
