import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const CategoriesPage = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <StatusBar style="light" backgroundColor="#185e91" translucent={false} />
            <Text>CategoriesPage</Text>
        </View>
    )
}

export default CategoriesPage