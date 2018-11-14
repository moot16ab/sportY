import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome</Text>
            <Button
            title="Go to details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
            </View>
        );
    }
}