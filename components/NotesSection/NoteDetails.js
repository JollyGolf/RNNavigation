import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';

import { getNoteQuery } from './queries/queries';

class NoteDetails extends React.Component {
  displayNoteDetails() {
  	const { note } = this.props.data;
  	if(note) {
  	  return (
  	  	<View style={styles.container}>
  	  	  <Text style={styles.text}>Note details</Text>
  	  	  <Text style={styles.text}>Title: {note.title}</Text>
  	  	  <Text style={styles.text_description}>Content: {note.description}</Text>
  	  	</View>
  	  )
  	} else return null
  }
  render() {
  	return (
  	  <View>
  	  	{ this.displayNoteDetails() }
  	  </View>
  	)
  }
}

export default graphql(getNoteQuery, {
  options: (props) => {
  	return {
  	  variables: {
  	  	id: props.noteId
  	  }
  	}
  }
})(NoteDetails);

const styles = StyleSheet.create({
  arrow: {
  	top: 0,
  	position: 'absolute', 
  	width: 50,
  	height: 50,
  	backgroundColor: 'blue',
  	margin: 40
  },
  container: {
  	color: '#fff',
  	margin: 10,
  	borderWidth: 1,
  	borderStyle: 'solid',
  	borderColor: 'black',
  	borderRadius: 15,
  	backgroundColor: 'white'
  },
  text: {
  	padding: 10,
    color: 'black'
  },
  text_description: {
  	padding: 10,
  	color: 'white',
  	backgroundColor: 'grey'
  }
});