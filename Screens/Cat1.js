import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react'

class Cat1 extends React.Component {
    render() {
      return (
        <Text>Hello</Text>
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


export default Cat1;