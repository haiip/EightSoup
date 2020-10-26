import React from "react";
import { Text, View, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const CardList = ({ title, text }) => {
  return (
    <View>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Image
          source={require("./quinoa.jpg")}
          style={{ height: 300, width: 350 }}
        />
        <Text style={{ marginBottom: 10 }}>{text}</Text>
        <Button
          icon={<Icon name="shopping-basket" color="white" />}
          buttonStyle={{
            borderRadius: 50,
            marginLeft: 0,
            marginRight: 220,
            marginBottom: 0,
            color: "#90EE81",
          }}
          onPress
          title="Order now"
        />
      </Card>
    </View>
  );
};

export { CardList };
