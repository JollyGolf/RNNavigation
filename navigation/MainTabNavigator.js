import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CurrencyScreen from '../screens/CurrencyScreen';
import WeatherScreen from '../screens/WeatherScreen';
import NotesScreen from '../screens/NotesScreen';
import TaskScreen from '../screens/TaskScreen';
import HolidaysScreen from '../screens/HolidaysScreen';

const CurrencyStack = createStackNavigator({ Currency: CurrencyScreen });
const WeatherStack = createStackNavigator({ Weather: WeatherScreen });
const NotesStack = createStackNavigator({ Notes: NotesScreen });
const TaskStack = createStackNavigator({ Task: TaskScreen });
const HolidaysStack = createStackNavigator({ Holidays: HolidaysScreen });


CurrencyStack.navigationOptions = {
  tabBarLabel: 'Currency',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='ionicons' focused={focused} name={'md-paper' }/>
  ),
}; 

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='ionicons' focused={focused} name={'md-partly-sunny'} />
  ),
}; 

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='ionicons' focused={focused} name={'md-analytics'} />
  ),
}; 

TaskStack.navigationOptions = {
  tabBarLabel: 'Task',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='ionicons' focused={focused} name={'md-clipboard'} /> //md-chatbubbles
  ),
};

HolidaysStack.navigationOptions = {
  tabBarLabel: 'Holidays',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='materialicons'focused={focused} name={'date-range'} /> //md-call md-keypad md-planet
  ),
};

export default createBottomTabNavigator({
  HolidaysStack,
  CurrencyStack,
  NotesStack,
  TaskStack,
  WeatherStack 
});


const styles = StyleSheet.create({
  icon: {
    flex: 1,
    backgroundColor: '#353535',
    color: '#fff'
  }
});