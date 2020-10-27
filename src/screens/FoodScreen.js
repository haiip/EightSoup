import React from "react";
import { Button } from "react-native";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const Resturant = ({ resturant, navigation }) => (
  <View>
    <Text>name: {resturant.alias}</Text>
    <Text>Phone: {resturant.phone}</Text>
    <Text>Rating: {resturant.rating}</Text>
    <Text>Reviews: {resturant.review_count}</Text>
    <Text>
      Adress:
      {`${resturant.location.address1} ${resturant.location.zip_code} ${resturant.location.city}`}
    </Text>

    <Button title="hej" onPress={() => navigation.navigate("AppScreen")} />

    <Image
      source={{ uri: resturant.image_url }}
      style={{ width: 400, height: 400 }}
    />
  </View>
);

export function FoodScreen({ route, navigation }) {
  navigation.setOptions({ title: route.params.title });
  const resturants = route.params.businesses.map((r) => (
    <Resturant key={r.id} resturant={r} navigation={navigation} />
  ));
  return <Container>{resturants}</Container>;
}
