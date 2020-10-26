import React, { PureComponent } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import yelp from "../api/yelp";

class LocationItem extends PureComponent {
  handPress = async () => {
    const res = await this.props.fetchDetails(this.props.place_id);
    const { lat, lng } = res.geometry.location;
    const response = await yelp.get("/search", {
      params: {
        limit: 10,
        term: "resturants",
        latitude: lat,
        longitude: lng,
        radius: 4000,
      },
    });

    this.props.handleTextChange(this.props.description);
    this.props.navigation.navigate("TestScreen", {
      businesses: response.data.businesses,
      title: this.props.description,
    });
  };

  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this.handPress}>
        <Text numberOfLines={1}>{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    width: 300,
  },
});

export default LocationItem;
