import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostAddEmlak, PostAddVasita } from "../screens/PostAddEmlakVasita";
import PostAdd from "../screens/PostAdd";
import PostAddOtoYear from "../screens/PostAddOtoYear";
import PostAddOtoModel from "../screens/PostAddOtoModel";
import PostAddModelSelect from "../screens/PostAddModelSelect";
import PostAddCarDetails from "../screens/PostAddCarDetails";

const Stack = createNativeStackNavigator();
const PostAddNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PostAdd">
      <Stack.Screen
        name="PostAdd"
        component={PostAdd}
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
      <Stack.Screen
        name="PostAddEmlak"
        component={PostAddEmlak}
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
      <Stack.Screen
        name="PostAddVasita"
        component={PostAddVasita}
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
      <Stack.Screen
        name="PostAddOtomobil"
        component={PostAddOtoYear}
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
      <Stack.Screen
        name="PostAddOtoModel"
        component={PostAddOtoModel}
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
      <Stack.Screen
        name="PostAddModelSelect"
        component={PostAddModelSelect}
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
      <Stack.Screen
        name="PostAddCarDetails"
        component={PostAddCarDetails}
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
