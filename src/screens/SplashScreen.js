import { View, Image, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 300); // 2 saniye sonra Main'e geç
    }, []);
    return (
        <SafeAreaView className="flex-1 bg-sahibindenyellow">
            <StatusBar style="dark" backgroundColor="#fee906" translucent={false} />
            <View className="flex-1 items-center justify-center">
                <Image
                    source={require('../../assets/images/sahibindens.jpg')}
                    className="w-80 h-80"
                    resizeMode="contain"
                />
            </View>
            <View className="bottom-8  items-center">
                <Text className="text-2xl font-semibold text-black text-center">sahibinden.com</Text>
                <Text className="text-sm- font-medium text-black text-center">al-sat-kirala-keşfet</Text>
            </View>
        </SafeAreaView>
    );
};
export default SplashScreen;
