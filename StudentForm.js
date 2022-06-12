import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const db = require('./db');

class EventForm extends Component {
    state= {
        name: "",
        number: 0
    }
    handleChangeName = (value) => {
        this.setState({name: value})
    }
    handleChangeNumber = (value) => {
        this.setState({number: parseInt(value)})
    }
    render() {
        return (
            <View>
                <TextInput style={styles.textBox} placeholder='Student Name' value={this.state.name} onChangeText={this.handleChangeName}></TextInput>
                <TextInput style={styles.textBox} placeholder='Student Name' value={this.state.number} onChangeText={this.handleChangeNumber}></TextInput>
                <Button title='Add' onPress={() => db.AddStudent(this.state.name, this.state.number).then(() => this.props.navigation.navigate('StudentsList'))}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: 'FFFFFF',
        padding: 10
    }
})

export default EventForm;