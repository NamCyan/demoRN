import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CatListItems from './components/CatList'
import React from 'react'
class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        categories: [
            { id: 1, name: 'mèo đen', imagesrc: require("./assets/cat.png") },
            { id: 2, name: 'mèo hồng', imagesrc: require("./assets/cat2.png") },
            { id: 3, name: 'mèo ngơ', imagesrc: require("./assets/cat3.png") },
            { id: 4, name: 'mèo đen', imagesrc: require("./assets/cat.png") },
            { id: 5, name: 'mèo hồng', imagesrc: require("./assets/cat2.png") },
            { id: 6, name: 'mèo ngơ', imagesrc: require("./assets/cat3.png") },
        ]
      }
  }

  render() {
    const { categories } = this.state
    return (
      <View>
          <FlatList
            data= {categories}
            renderItem= {({ item }) => <CatListItems name={item.name} imagesrc={item.imagesrc}/>}
            keyExtractor= {item => `${item.id}`}
            contentContainerStyle= {{ paddingLeft: 8, paddingRight: 8}}
          />
      </View>
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