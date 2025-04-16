import { View, Text, Image } from 'react-native'
import React from 'react'

const ShowCasePost = () => {
    return (
        <View className="w-44 h-25 bg-white justify-center items-center">
            <Image source={require('../../assets/images/tir.jpg')} className="w-45 h-24" resizeMode="contain" />
            <Text className="mt-2 text-center text-black">Sahibinden Temiz 1844</Text>
        </View>
    );
}

export default ShowCasePost;
