import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const currentTitle = "Notes";

export default class NotesScreen extends React.Component {
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
  }
});
