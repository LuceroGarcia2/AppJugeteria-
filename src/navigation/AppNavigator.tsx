// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CreateToyScreen from "../screens/CreateToyScreen";
import UpdateToyScreen from "../screens/UpdateToyScreen";

// 📌 Tipo de juguete (puedes ajustarlo según tu modelo real)
export type Toy = {
  id: number;
  name: string;
  price: number;
  categoryName?: string;
};

// 📌 ParamList para navegación
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Products: undefined;
  ProductDetail: { id: number };
  CreateToy: undefined;
  UpdateToy: { toy: Toy }; // 👈 recibe el juguete completo
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="CreateToy" component={CreateToyScreen} />
        <Stack.Screen name="UpdateToy" component={UpdateToyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
