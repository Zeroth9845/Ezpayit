import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useEffect } from 'react';


import StackScreen from './screens/StackScreen';
import LoginScreen from './screens/LoginScreen';

//import { AuthContext } from './components/context';

const App = () =>  {
 
  return (
    <NavigationContainer>
    <StackScreen/>
      {/* <Stack.Navigator screenOptions={globalScreenOptions}> */}
        {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        {/* <Stack.Screen name='Register' component={RegisterScreen}/> */}
        {/* <Stack.Screen name='Home' component={mainScreen}/> */}
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;

