import React, {Component} from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';
import StudentCard from './StudentCard';

const db = require('./db');

class StudentsList extends Component{
    state = {
        students: [],
    };
    componentDidMount(){
        db.GetStudents().then(students => this.setState({students}))
    };
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.students}
                    renderItem={({item})=> <StudentCard student={item}></StudentCard>}
                ></FlatList>
                <Button title='Add Student' onPress={() => this.props.navigation.navigate('StudentForm')}></Button>
            </View>
        );
    };
}

export default StudentsList;