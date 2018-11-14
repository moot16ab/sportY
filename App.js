import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, navigationOptions, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/pages/HomeScreen';
import SettingsScreen from './components/pages/SettingsScreen';
import DetailsScreen from './components/pages/DetailsScreen';
import ProfileScreen from './components/pages/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Profile: { screen: ProfileScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
  Profile: { screen: ProfileScreen },
});

//Heeeeeeey hooo
const ProfileStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: DetailsScreen},
  Profile: {screen: ProfileScreen },
});

export default createBottomTabNavigator({
  Home: { screen: HomeStack },
  Settings: {screen: SettingsStack},
  Profile: { screen: ProfileStack },
},

{
  navigationOptions: ({ navigation }) => ({

    tabBarIcon: ({ focused, tintColor }) => {

      const { routeName } = navigation.state;
      var iconName;

      if (routeName === 'Home') {
        iconName = 'md-information-circle';
      } else if (routeName === 'Settings') {
        iconName = 'md-options';
      } else if (routeName === 'Profile') {
        iconName = 'ios-person';
      }
      return <Ionicons name={iconName} size={25} color ={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);
