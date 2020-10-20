import React from 'react'
import { TextInput } from 'react-native';
import { View, Text, StyleSheet, Image, Button, ScrollView, ActivityIndicator} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { color } from 'react-native-reanimated';

import LocationItem from './components/LocationItem';



export class App extends React.Component {
render() {
return (
  <View style={styles.container}>
    <GoogleAutoComplete apiKey={"AIzaSyDPwtARzqKH1TYj6O1OLHYBY19h-G7gd7w"} debounce={500} minLength={3}>
        {({ 
            handleTextChange, 
            locationResults, 
            fetchDetails, 
            isSearching, 
            inputValue,
            clearSearch
        }) => (
            <React.Fragment>
            {console.log('localResults, locationReults')}
                <View style ={styles.inputWrapper}>
                        <TextInput 
                        style={styles.TextInput} 
                        placeholder="Search a place " 
                        onChangeText={handleTextChange}
                        value={inputValue}
                        />
                        <Button 
                        title="Clear" 
                        onPress={clearSearch}
                        color='#4caf50' />
                </View>
                {isSearching && <ActivityIndicator size='large' color="4caf50"/>}
                <ScrollView>
                {locationResults.map (el  => 
                    <LocationItem 
                    {...el}
                    key={el.id}
                    fetchDetails={fetchDetails}
                    
                    
                    />
                    )}
                </ScrollView>
                <Image 
    source={require('./bilder/greenGod.jpg')}
    style={{ width: 510, height: 500}}
/>
            </React.Fragment>
        )}
    </GoogleAutoComplete>
</View>
        );
}

}

export const HomeScreen = ({ navigation }) => {
return (
<View>
<Image 
    source={require('./bilder/greenGod.jpg')}
    style={{ width: 710, height: 700}}
/>
 <Button
        title="Login"
        onPress={() => navigation.navigate("Search")}
      />
</View>

);
};

const styles = StyleSheet.create({
container: {
flex:1,
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',

},

TextInput: {
height: 40,
width: 300,
borderWidth: 1.
},
inputWrapper: {
marginTop: 80,
flexDirection: 'row',
// color: '#4caf50'
}


});
