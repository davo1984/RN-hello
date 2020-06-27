import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const ReactLogo = { url: 'https://reactjs.org/logo-og.png' };
import AppOrig from './src/AppOrig';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
                style={{ flex: 1 }}
                //We are using online image to set background
                source={{
                  uri: 
                    'https://picsum.photos/100'
                    // 'https://reactjs.org/logo-og.png'
                    // one below is prettier
                    // 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
                }}
                //You can also set image from your project folder
                //require('./images/background_image.jpg')        //
                >
                <View style={styles.MainContainer}>
                  <Image
                    source={{
                    uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                    }}
                    style={{ width: 40, height: 40, marginTop: 90 }}
                  />
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Button
                          title="Original App"
                          onPress={() => navigation.navigate('AppOrig')}
                      />
                  </View>
                  {/* <Text style={styles.TextStyle}>https://aboutreact.com</Text> */}
                </View>
              </ImageBackground>
    );
}

function AddUser({ navigation }) {

}

function AppOrigScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <AppOrig />
            <Button
                title="go to Original Mess ... again"
                onPress={() => navigation.push('AppOrig')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddUser" component={AddUser} />
                <Stack.Screen name="ListNumber" component={ListNumber} />
                <Stack.Screen name="AddUser" component={AddUser} />
                <Stack.Screen name="AppOrig" component={AppOrigScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center',
    },
    TextStyle: {
      color: '#0250a3',
      textAlign: 'center',
      fontSize: 30,
      marginTop: 10,
    },
  });

export default App;