import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodScreen } from "./src/screens/FoodScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { TestScreen } from "./src/screens/TestScreen";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          title: "Eight Soups",
          headerStyle: {
            backgroundColor: "#90EE81",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={"FoodScreen"}
        component={FoodScreen}
        options={{
          title: "Food",
          headerStyle: {
            backgroundColor: "#90EE81",
          },
        }}
      />
      <Stack.Screen
        name={"TestScreen"}
        component={TestScreen}
        options={{
          title: "Soups",
          headerStyle: {
            backgroundColor: "#90EE81",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
