import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatList from './Screens/CatList';
import CatDetail from './Screens/CatDetail'


const Stack = createNativeStackNavigator();

class App extends React.Component {
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={CatList} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'pink',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10
  },
  scrollView: {
    paddingRight: 8,
    paddingLeft: 8
  }
});


export default App;