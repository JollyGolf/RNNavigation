import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import firebase from 'firebase';
//import { AppRegistry } from 'react-native';

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'; 
 
import ListNotes from '../components/NotesSection/ListNotes'; 
import AddNote from '../components/NotesSection/AddNote';

const cache = new InMemoryCache(); 
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://e91e3483.ngrok.io/graphql'
  }),
});  
const headerComponent = <View><Text>+</Text><Text>-</Text></View>;
export default class NotesScreen extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = { 
    title: 'Your Notes:',
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 40
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  rerenderParent = (value) => {
    this.setState({valueForRerender: value});
  }
  render() {  
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <ListNotes />
        </View> 
      </ApolloProvider>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    paddingBottom: 10
  },
  text: {
    color: '#fff'
  }
});