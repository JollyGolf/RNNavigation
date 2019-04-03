import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';

import { getNoteQuery } from './queries/queries';

class NoteDetails extends React.Component {
  displayNoteDetails() {
  	const { note } = this.props.data;
  	if(note) return <Text style={styles.text_description}>Content: {note.description}</Text>;
    else return null;
  }
  render() {
  	return (
  	  <View style={styles.container}>
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
  container: {
  	backgroundColor: '#0089e0',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 10,
  },
  text_description: {
  	padding: 10,
  	color: 'white'
  }
});