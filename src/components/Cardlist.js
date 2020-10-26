import React, { useState } from "react";
import { Text, View, Image, StyleShee, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const CardList = ({ title, text }) => {
  const [counter, setCounter] = useState(0);

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
        <Text>Current count:{counter} </Text>
        <Button
          buttonStyle={{
            borderRadius: 30,
            marginLeft: 0,
            marginRight: 220,
            marginBottom: 0,
            color: "#90EE81",
          }}
          title="+"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button
          buttonStyle={{
            borderRadius: 30,
            marginLeft: 0,
            marginRight: 220,
            marginBottom: 0,
            color: "#90EE81",
          }}
          title="-"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export { CardList };
