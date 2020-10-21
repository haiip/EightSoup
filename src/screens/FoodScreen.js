import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const Resturant = ({ resturant }) => (
  <View>
    <Text>name: {resturant.alias}</Text>
    <Text>Phone: {resturant.phone}</Text>
    <Text>Rating: {resturant.rating}</Text>
    <Text>Reviews: {resturant.review_count}</Text>
    <Text>
      Adress:
      {`${resturant.location.address1} ${resturant.location.zip_code} ${resturant.location.city}`}
    </Text>

    <Image
      source={{ uri: resturant.image_url }}
      style={{ width: 400, height: 400 }}
    />
  </View>
);

export function FoodScreen({ route, navigation }) {
  navigation.setOptions({ title: route.params.title });
  const resturants = route.params.businesses.map((r) => (
    <Resturant key={r.id} resturant={r} />
  ));
  return <Container>{resturants}</Container>;
}
