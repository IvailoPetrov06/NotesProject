import React, {Component, FlatList} from 'react';
import {View, Button} from 'react-native';
import StudentCard from './StudentCard';

const db = require('./db');

class StudentsList extends Component{
    state = {
        students: [],
    };
    componentDidMount(){
        const students = db.GetStudents();
        this.setState({students})
    };
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.students}
                    renderItem={({item})=> <StudentCard note={item} />}
                ></FlatList>
            </View>
        );
    };
}

export default StudentsList;