import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo'; 
 

export default class NotesScreen extends React.Component {
  static navigationOptions = { title: "Notes" };

  render() {  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hey</Text>
      </View> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
  text: {
    color: '#fff'
  }
});