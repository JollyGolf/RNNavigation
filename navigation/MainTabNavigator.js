import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotesScreen from '../screens/NotesScreen';

const HomeStack = createStackNavigator({ Home: HomeScreen });
const WeatherStack = createStackNavigator({ Weather: WeatherScreen });
const NotesStack = createStackNavigator({ Notes: NotesScreen });
const SettingsStack = createStackNavigator({ Settings: SettingsScreen });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-paper' } />
  ),
};

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-partly-sunny'} />
  ),
};

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-analytics'} />
  ),
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-options'} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  WeatherStack,
  NotesStack,
  SettingsStack
});
