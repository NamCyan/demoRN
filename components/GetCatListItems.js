import React, { useState } from 'react'
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function GetCatListItems(props) {
    const { catinfo, onPress } = props;
    return( 
        <TouchableOpacity activeOpacity={0.5} onPress= {onPress}>
            <View style= {styles.container}>
                <Text style= {styles.title}>{catinfo.name}</Text>
                <Image source= {catinfo.imagesrc} style={styles.catimage} />
            </View> 
        </TouchableOpacity>
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