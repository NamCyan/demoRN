import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react'
import CatItem from '../components/CatItem'

class Cat1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      "cats": [
        {
          "id": 1,
          "url": require("../assets/cat.png"),
          "name": "toxedon",
          "price": 5000
        },
        {
          "id": 2,
          "url": require("../assets/cat1.png"),
          "name": "toxedon",
          "price": 5000
        },
      ]
    }
  };
  
  render() {
    return (
      <FlatList
          data= {this.state.cats}
          numColumns= {2}
          renderItem= {({ item }) => <View style= {styles.wrapper}><CatItem catinfo= {item}/></View>}
          keyExtractor= {item => `${item.id}`}
          contentContainerStyle= {styles.container}
      />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 16

  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 4,
  }
});


export default Cat1;