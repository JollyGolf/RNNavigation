import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class WeatherComponent extends React.Component{
  render(){
    const { t, color, icon, title, subTitle } = this.props;
    return ( 
      <View style={[styles.weatherContainer, { backgroundColor: `${color}`}]}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={80} name={ icon } color={'#fff'} />
          <Text style={styles.tempText}>{ t }˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.subtitle}>{ subTitle }</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
