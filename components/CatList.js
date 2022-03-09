import React, { useState } from 'react'
import { Button, View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { BoolifiedDeprecatedTextStylePropTypes } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function CatListItems(props) {
    return( 
        <View style= {styles.container}>
            <Text style= {styles.title}>{props.name}</Text>
            <Image source= {props.imagesrc} style={styles.catimage} />
        </View> 
    )
}

const styles = StyleSheet.create(
    {
        catimage: {
            width: 100,
            height: 100,
        },
        container: {
            padding: 16,
            backgroundColor: "powderblue",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            shadowOpacity: 0.2,
            shadowRadius: 10,
            shadowOffset: { width:0, height:0},
            marginBottom: 8,
        },
        title: {
            textTransform: 'uppercase',
            marginBottom: 16,
            fontWeight: "900"
        }
    }
)