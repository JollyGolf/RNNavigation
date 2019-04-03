import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, addNoteMutation } from './queries/queries';
import { AddForm, AddNoteOptionForm, AddformStyles, optionsAddForm } from './forms/addNoteForm';

class AddNote extends React.Component {
  submitForm = () => {
    const value = this._form.getValue();
    this.props.addNoteMutation({
      variables: {
      	title: value.title,
      	description: value.content
      },
      refetchQueries: [{ query: getNotesQuery}]
    })
  }
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>Add Note</Text>
      	<AddForm 
      	  ref={c => this._form = c}
      	  type={ AddNoteOptionForm }
      	  option={ optionsAddForm }
      	/>
      	<Button title="Add Note" onPress={this.submitForm} />
      </View>
    ); 
  }
}


export default compose(graphql(addNoteMutation, {name: "addNoteMutation"}))(AddNote);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  text: {
  	textAlign: 'center',
  	fontSize: 20,
  	fontWeight: '600',
    color: 'blue',
    borderRadius: 15,
    borderBottomColor: '#353535',
    borderBottomWidth: 2,
    borderTopColor: '#353535',
    borderTopWidth: 2,
    marginBottom: 5,
  },
  noteName: {
  	color: '#fff',
  	padding: 10,
  	margin: 10,
  	borderWidth: 1,
  	borderStyle: 'solid',
  	borderColor: 'white',
  	borderRadius: 15,
  	backgroundColor: 'black'
  }
});