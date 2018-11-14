import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: "Settings"
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
            <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
            </View>
        );
    }
}