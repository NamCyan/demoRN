import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function CatItem(props) {
    const {catinfo, onAddToCartClick} = props
    return(
        <View style= {styles.shadow}>
            <View style= {styles.container}>
                <Image style= {styles.image} source= {catinfo.url}/>
                <View style= {styles.info}>
                    <Text style= {styles.name}>{catinfo.name}</Text>
                    <View style= {styles.priceRow}>
                        <Text style= {styles.price}>{catinfo.price}$</Text>
                        <TouchableOpacity onPress={onAddToCartClick}>
                            <Text style= {styles.carttext}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create(
    {
        shadow: {
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 10, 
            shadowOffset: {width: 0, height: 0}
        },
        container: {
            overflow: 'hidden',
            backgroundColor: '#FFF',
            marginBottom: 8,
            // alignItems: 'center'
        },
        image: {
            width: 170,
            height: 170,
            marginBottom: 8,
            marginTop: 8,
            marginHorizontal:2.5
        },
        price: {
            fontSize: 13,
            flex: 1,
            color: 'gray'
        },
        info: {
            textTransform: 'uppercase',
            marginBottom: 15,
            fontWeight: "900"
        },
        carttext: {
            textTransform: 'uppercase',
            fontSize: 13,
            flex: 1,
            color: 'red'
        },
        name: {
            textTransform: 'uppercase',
            fontSize: 15,
            marginBottom: 5,
            paddingHorizontal: 3,
            fontWeight: '500',
        },
        priceRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 3
        }
    }
)