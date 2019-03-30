import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const currentTitle = "Weather";

export default class WeatherScreen extends React.Component {
  static navigationOptions = { title: currentTitle };

  render() {
    return (
      <View style={styles.container}>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
