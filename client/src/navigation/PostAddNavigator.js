import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "../components/CustomHeader";
import PostAdd from "../screens/PostAdd";
import { PostAddEmlak } from "../screens/PostAddEmlakVasita";
import { PostAddVasita } from "../screens/PostAddEmlakVasita";
import PostAddOtoYear from "../screens/PostAddOtoYear";
import PostAddOtoModel from "../screens/PostAddOtoModel";
import PostAddModelSelect from "../screens/PostAddModelSelect";
import PostAddCarDetails from "../screens/PostAddCarDetails";
import MapPage from "../screens/MapPage";
import AddressSelect from "../screens/AddressSelect";
import AddressDetailsSelect from "../screens/AddressDetailsSelect";
import PhotoVideoSelect from "../screens/PhotoVideoSelect";
import ContactInformation from "../screens/ContactInformation";
import CompletedPage from "../screens/CompletedPage";
const Stack = createNativeStackNavigator();
const PostAddNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PostAdd">
      <Stack.Screen
        name="PostAdd"
        component={PostAdd}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddEmlak"
        component={PostAddEmlak}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddVasita"
        component={PostAddVasita}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddYear"
        component={PostAddOtoYear}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddOtoModel"
        component={PostAddOtoModel}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddModelSelect"
        component={PostAddModelSelect}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PostAddCarDetails"
        component={PostAddCarDetails}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlan Ver"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="MapPage"
        component={MapPage}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlanın Adresini Giriniz"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="AddressSelect"
        component={AddressSelect}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlanın Adresini Giriniz"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="AddressDetailsSelect"
        component={AddressDetailsSelect}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İlanın Adresini Seçiniz"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="PhotoVideoSelect"
        component={PhotoVideoSelect}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="Fotoğraf / Video Seçin"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="ContactInformation"
        component={ContactInformation}
        options={{
          headerTitle: () => (
            <CustomHeader
              title="İletişim Bilgileri"
              showicon={false}
              showTwoIcons={false}
              showCarIcon={false}
              onClose={true}
            />
          ),
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="CompletedPage"
        component={CompletedPage}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#185e91",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default PostAddNavigator;
