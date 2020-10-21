import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodScreen } from "./src/screens/FoodScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name={"FoodScreen"}
        component={FoodScreen}
        options={{ title: "Food" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
