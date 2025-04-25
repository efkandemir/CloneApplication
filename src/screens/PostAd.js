import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PostAd = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate("LoginPage",{details:"postadd"});
  }, []);

  return (
    <View>
      <Text>PostAd</Text>
    </View>
  );
};

export default PostAd;
