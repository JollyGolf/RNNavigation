import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CurrencyScreen from '../screens/CurrencyScreen';
import WeatherScreen from '../screens/WeatherScreen';
import NotesScreen from '../screens/NotesScreen';
import TaskScreen from '../screens/TaskScreen';
import SettingsScreen from '../screens/SettingsScreen';

const CurrencyStack = createStackNavigator({ Currency: CurrencyScreen });
const WeatherStack = createStackNavigator({ Weather: WeatherScreen });
const NotesStack = createStackNavigator({ Notes: NotesScreen });
const TaskStack = createStackNavigator({ Task: TaskScreen });
const SettingsStack = createStackNavigator({ Settings: SettingsScreen });


CurrencyStack.navigationOptions = {
  tabBarLabel: 'Currency',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-paper' }/>
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

TaskStack.navigationOptions = {
  tabBarLabel: 'Task',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-clipboard'} /> //md-chatbubbles
  ),
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-options'} />
  ),
};


export default createBottomTabNavigator({
  CurrencyStack,
  NotesStack,
  TaskStack,
  WeatherStack,  
  SettingsStack
});


const styles = StyleSheet.create({
  icon: {
    flex: 1,
    backgroundColor: '#353535',
    color: '#fff'
  }
});