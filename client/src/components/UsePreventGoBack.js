import { useEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const UsePreventGoBack = (prevent = true) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!prevent) return;

    // Android için back tuşu engelleme
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    // iOS için swipe gesture engelleme
    navigation.setOptions({ gestureEnabled: false });

    return () => {
      backHandler.remove();
      navigation.setOptions({ gestureEnabled: true });
    };
  }, [prevent, navigation]);
};
