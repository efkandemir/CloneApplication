import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import ShowCasePost from "../components/ShowCasePost";
import { UsePreventGoBack } from "../components/UsePreventGoBack";

const ShowCasePage = () => {
  UsePreventGoBack();
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
