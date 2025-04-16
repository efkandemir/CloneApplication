import { View, TextInput, FlatList, StatusBar } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native';
import ShowCasePost from '../components/ShowCasePost';

const ShowCasePage = () => {

    return (
        <SafeAreaView className="flex-1 bg-sahibindengray  ">
            <View className="flex-row py-3 px-5 justify-between ">
                <ShowCasePost />

                <ShowCasePost />


            </View>






        </SafeAreaView>
    );
};

export default ShowCasePage;
