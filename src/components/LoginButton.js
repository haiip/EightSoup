import React from "react";
import { View, StyleSheet, Button } from "react-native";

export const LoginButton = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
  },
});

export default LoginButton.App;
