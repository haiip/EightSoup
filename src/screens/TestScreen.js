import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardList } from "../components/Cardlist";

export const TestScreen = () => {
  return (
    <ScrollView>
      <View>
        <CardList title="Quinoa" text="hejsan" />
        <CardList title="Carrot" text="hejdå" />
        <CardList title="Curry" text="sdgsg" />
        <CardList title="Green God" text="sdgsgs" />
        <CardList title="Potato" text="dsgsgdsgsg" />
      </View>
    </ScrollView>
  );
};

export default TestScreen;
