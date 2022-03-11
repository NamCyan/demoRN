import { StyleSheet, Text, View, FlatList } from 'react-native';
import GetCatListItems from '../components/GetCatListItems'
import React from 'react'

class CatList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                { id: 1, name: 'Mèo Đen', imagesrc: require("../assets/cat.png") },
                { id: 2, name: 'Mèo Hồng', imagesrc: require("../assets/cat2.png") },
                { id: 3, name: 'Mèo Ngơ', imagesrc: require("../assets/cat3.png") },
                { id: 4, name: 'Mèo Đỏ', imagesrc: require("../assets/cat1.png") },
                { id: 5, name: 'Mèo Tiến Hóa', imagesrc: require("../assets/cat4.png") },
                { id: 6, name: 'Mèo Ngầu', imagesrc: require("../assets/cat5.png") },
            ]
        }
    };

    render() {
        const { categories } = this.state
        const { navigation } = this.props
        return (
        <View>
            <FlatList
                data= {categories}
                renderItem= {({ item }) => <GetCatListItems 
                onPress = {() => navigation.navigate("Cat1", {
                    catname: item.name
                })} 
                catinfo = {item}/>}
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


export default CatList;