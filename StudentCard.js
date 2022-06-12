import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default function StudentCard({note}){
    return(
        <View>
            <Text>{note.student} - {note.number}</Text>
        </View>
    )
}