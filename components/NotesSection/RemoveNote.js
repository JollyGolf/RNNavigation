import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, removeNoteMutation } from './queries/queries';
import { RemoveForm, RemoveNoteOptionForm, RemoveformStyles, optionsRemoveForm } from './forms/removeNoteForm';


class RemoveNote extends React.Component {
  submitForm = () => {
    const value = this._form.getValue();
    this.props.removeNoteMutation({
      variables: {
      	title: value.title
      },
      refetchQueries: [{ query: getNotesQuery}]
    });
  } 
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>Remove Note</Text>
      	<RemoveForm 
      	  ref={c => this._form = c}
      	  type={ RemoveNoteOptionForm }
      	  option={ optionsRemoveForm }
      	/>
      	<Button title="Remove Note" onPress={this.submitForm} />
      </View>
    ); 
  }
}


export default compose(graphql(removeNoteMutation, {name: "removeNoteMutation"}))(RemoveNote);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  text: {
  	textAlign: 'center',
  	fontSize: 20,
  	fontWeight: '600',
    color: 'red',
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