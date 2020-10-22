import React from "react";
import { TextInput } from "react-native";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { GoogleAutoComplete } from "react-native-google-autocomplete";

import LocationItem from "../components/LocationItem";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
                <Button title="Clear" onPress={clearSearch} color="#90EE81" />
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
              <ImageBackground
                source={require("../bilder/greenGod.jpg")}
                style={{ width: 100, height: 100 }}
              />
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
    borderWidth: 1,
  },
  inputWrapper: {
    marginTop: 80,
    flexDirection: "row",
  },
});
