import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CategoriesDetailsPage = ({ route }) => {
    const { ilan } = route.params;

    
    /*const ilanDetay = {
        baslik: {ilan},
        satici: "ÖZ OĞUZ KARDEŞLER OTOMOTİV",
        kategori: "Vasıta » Ticari Araçlar » Çekici » Mercedes-Benz » Actros » 1844",
        konum: "Gaziantep, Şehitkamil, Burak Mah.",
        fiyat: "2.380.000 TL",
        ilanTarihi: "17.04.2025",
        ilanNo: "12215919894069",
        tip: "Çekici",
        marka: "Mercedes-Benz",
        seri: "Actros",
        model: "1844",
        yil: "2013",
        resim: "DENEME"
    };
    */

    return (
        <View className="flex-1 bg-gray-50">
           
            <View className="bg-white p-4 border-b border-gray-200">
                <Text className="text-xl font-bold text-center">{ilan}</Text>
            </View>

            <ScrollView className="flex-1 p-4">
               
                <View className="bg-gray-200 rounded-lg h-64 mb-4 justify-center items-center">
                    <Image 
                        source={require('../../assets/images/tir.jpg')} 
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>

           
                <View className="mb-6">
                    <Text className="text-lg font-semibold">"DENEME</Text>
                    <Text className="text-gray-600 mt-1">DENEME</Text>
                    <View className="flex-row items-center mt-1">
                        <Ionicons name="location-outline" size={16} color="#6b7280" />
                        <Text className="text-gray-600 ml-1">DENEME</Text>
                    </View>
                </View>

   
                <View className="bg-white rounded-lg p-4 shadow-sm">
                    <View className="border-b border-gray-100 pb-3 mb-3">
                        <Text className="text-gray-500">Fiyat</Text>
                        <Text className="text-2xl font-bold text-red-600 mt-1">DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">İlan Tarihi</Text>
                        <Text>DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">İlan No</Text>
                        <Text className="font-semibold">DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">Tipi</Text>
                        <Text>DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">Marka</Text>
                        <Text>DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">Seri</Text>
                        <Text>DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3 border-b border-gray-100">
                        <Text className="text-gray-500">Model</Text>
                        <Text>DENEME</Text>
                    </View>

                    <View className="flex-row justify-between py-3">
                        <Text className="text-gray-500">Yıl</Text>
                        <Text>DENEME</Text>
                    </View>
                </View>

                <View className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                    <Text className="text-lg font-semibold mb-2">Açıklama</Text>
                    <Text className="text-gray-700">
                        Sahibinden temiz, bakımlı, kliması ve buzdolabı olan 2013 model Mercedes-Benz Actros 1844 çekici. 
                        Daha fazla bilgi için iletişime geçebilirsiniz.
                    </Text>
                </View>
            </ScrollView>

            <View className="flex-row bg-white border-t border-gray-200 p-3">
                <TouchableOpacity className="flex-1 bg-blue-500 py-3 rounded-lg mr-2 items-center">
                    <Text className="text-white font-semibold">Ara</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-green-500 py-3 rounded-lg ml-2 items-center">
                    <Text className="text-white font-semibold">Mesaj Gönder</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CategoriesDetailsPage;