import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const currentTitle = "Settings";

export default class SettingsScreen extends React.Component {
  static navigationOptions = { title: currentTitle };

  render() {
    return (
      <View style={styles.container}>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

