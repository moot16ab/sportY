import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator } from 'react-navigation';

export default class DetailScreen extends React.Component {
    static navigationOptions = {
        title: "Details"
    };

    render() {
        return (
            < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Velkommen til detalje viewet</Text>
            <Button
            title="Go back"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            </View>
        );
    }
}