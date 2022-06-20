import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                   Благодарим ви, че добавихте този ученик.
                </Text>
                <Button title='Списък с учиници'
                onPress={
                    () => this.props.navigation.navigate('StudentList')
                }
                />
            </View>
        )
    }
};

export default ThankYou;