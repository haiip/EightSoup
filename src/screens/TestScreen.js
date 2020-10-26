import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardList } from "../components/Cardlist";

export const TestScreen = () => {
  return (
    <ScrollView>
      <View>
        <CardList
          title="Quinoa"
          text="hejsan"
          image={require("../bilder/quinoa.jpg")}
        />
        <CardList
          title="Carrot"
          text="hejdå"
          image={require("../bilder/carrot.jpg")}
        />
        <CardList
          title="Curry"
          text="sdgsg"
          image={require("../bilder/curry.jpg")}
        />
        <CardList
          title="Green God"
          text="sdgsgs"
          image={require("../bilder/greenGod.jpg")}
        />
        <CardList
          title="Potato"
          text="dsgsgdsgsg"
          image={require("../bilder/potato.jpg")}
        />
      </View>
    </ScrollView>
  );
};

export default TestScreen;
