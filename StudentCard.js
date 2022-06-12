import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StudentCard({student}){
    return(
        <View>
            <Text style={styles.cardName}>{student.name}</Text>
            <Text style={styles.cardNumber}>{student.number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardName: {
        backgroundColor: 'FFFFFF',
        padding: 2,
        margin: 2,
        fontSize: 20
    },
    cardNumber: {
        backgroundColor: 'FFFFFF',
        padding: 2,
        margin: 2
    }
})