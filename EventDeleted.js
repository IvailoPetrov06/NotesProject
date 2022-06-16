import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class EventDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    Ученикът беше прехамнат.
                </Text>
                <Button title='Списък с учиници'
                onPress={
                    () => this.props.navigation.navigate('EventList')
                }
                />
            </View>
        )
    }
};

export default EventDeleted;