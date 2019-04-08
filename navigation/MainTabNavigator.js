import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import DetectLanguageScreen from '../screens/DetectLanguageScreen';
import VerifyScreen from '../screens/VerifyScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import WeatherScreen from '../screens/WeatherScreen';
import NotesScreen from '../screens/NotesScreen';
import TaskScreen from '../screens/TaskScreen';
import HolidaysScreen from '../screens/HolidaysScreen';


const DetectLanguageStack = createStackNavigator({ DetectLanguage: DetectLanguageScreen });
const VerifyStack = createStackNavigator({ Verify: VerifyScreen });
const CurrencyStack = createStackNavigator({ Currency: CurrencyScreen });
const WeatherStack = createStackNavigator({ Weather: WeatherScreen });
const NotesStack = createStackNavigator({ Notes: NotesScreen });
const TaskStack = createStackNavigator({ Task: TaskScreen });
const HolidaysStack = createStackNavigator({ Holidays: HolidaysScreen });

DetectLanguageStack.navigationOptions = {
  tabBarLabel: 'Detect',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='fontawesome' focused={focused} name={'language'} />
  ),
};

VerifyStack.navigationOptions = {
  tabBarLabel: 'Verify',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon typeIcon='materialicons' focused={focused} name={'phone-locked'} />
  ),
};

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
  DetectLanguageStack,
  VerifyStack,
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