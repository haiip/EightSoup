import React from "react";
import { TextInput } from "react-native";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import { GoogleAutoComplete } from "react-native-google-autocomplete";

import LocationItem from "../components/LocationItem";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../bilder/Logga.png")}
          style={styles.imageCard}
        />

        <GoogleAutoComplete
          apiKey={"AIzaSyDPwtARzqKH1TYj6O1OLHYBY19h-G7gd7w"}
          debounce={500}
          minLength={3}
        >
          {({
            handleTextChange,
            locationResults,
            fetchDetails,
            isSearching,
            inputValue,
            clearSearch,
          }) => (
            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Search a place "
                  onChangeText={handleTextChange}
                  value={inputValue}
                  padding={10}
                />
                <TouchableOpacity
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 0,
                    backgroundColor: "red",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 20,
                  }}
                  title="Xsdgsdg"
                  onPress={clearSearch}
                  Text
                  style="hejsan"
                />
              </View>

              {isSearching && <ActivityIndicator size="large" color="4caf50" />}
              <ScrollView>
                {locationResults.map((el) => (
                  <LocationItem
                    {...el}
                    key={el.place_id}
                    fetchDetails={fetchDetails}
                    navigation={this.props.navigation}
                    handleTextChange={handleTextChange}
                  />
                ))}
              </ScrollView>
            </View>
          )}
        </GoogleAutoComplete>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    marginTop: 80,
    flexDirection: "row",
  },
  imageCard: {
    height: 200,
    width: 250,
    marginTop: 200,
    resizeMode: "contain",
  },
});
