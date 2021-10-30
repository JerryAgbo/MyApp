import React from 'react';
import {Text, View}from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Homepage from './Screens/home';
import Login from './Screens/login';
import { render } from 'react-dom';

const Stack = createNativeStackNavigator()

const  App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
     

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf00f1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});