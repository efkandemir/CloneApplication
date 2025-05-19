import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ShowCasePost = () => {
    const navigation = useNavigation();
    const ilan = "Sahibinden Temiz 1844";
    
    return (
        <View className="flex-1 mx-1 w-56">
            <Pressable 
                onPress={() => navigation.navigate('CategoriesDetails', { ilan: ilan })}
            >
                <View className="bg-white justify-center items-center w-55 h-34  overflow-hidden">
                  
                    <View className="w-full h-24 flex justify-center items-center">
                        <Image 
                            source={require('../../assets/images/tir.jpg')} 
                            className="w-full h-full"
                            resizeMode="contain"
                        />
                    </View>
                    
                  
                    <Text className="mt-2 text-center text-black text-sm font-medium ">
                        {ilan}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ShowCasePost;