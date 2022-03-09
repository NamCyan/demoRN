import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatListItems from './components/CatList'
// import cat1 from "../assets/cat.png"


export default function App() {
  return (
    <View style={styles.container}>
      <CatListItems name= "mèo đen" imagesrc= {require("./assets/cat.png")}/>
      <CatListItems name= "kronol" imagesrc= {require("./assets/cat2.png")}/>
      <CatListItems name= "mèo ngơ" imagesrc= {require("./assets/cat3.png")}/>
    </View>
  );
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
});
