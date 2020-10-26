import React from "react";
import { Text, View } from "react-native";

const Test = () => {
  return (
    <View>
      <Card>
        <Card.Title>Curry Soup</Card.Title>
        <Card.Divider />
        <Card.Image
          source={require("../bilder/quinoa.jpg")}
          style={{ width: 350, height: 200, resizeMode: "cover" }}
        />
        <Text style={{ marginBottom: 10 }}>lorem ipsum</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 20,
            marginLeft: 0,
            marginRight: 200,
            marginBottom: 0,
          }}
          title="Order now"
        />
      </Card>
    </View>
  );
};

export default Test;
