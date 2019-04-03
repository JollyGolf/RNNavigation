import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, updateNoteMutation } from './queries/queries';
import { UpdateForm, UpdateNoteOptionForm, UpdateformStyles, optionsUpdateForm } from './forms/updateNoteForm';

class UpdateNote extends React.Component {
  submitForm = () => {
    const value = this._form.getValue();
    const currTit = "Current title";
    this.props.updateNoteMutation({
      variables: {
      	currentTitle: value.CurrentTitle,
        newTitle: value.NewTitle,
        description: value.NewContent
      },
      refetchQueries: [{ query: getNotesQuery}]
    });
  } 
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>Update Note</Text>
      	<UpdateForm 
      	  ref={c => this._form = c}
      	  type={ UpdateNoteOptionForm }
      	  option={ optionsUpdateForm }
      	/>
      	<Button title="Update Note" onPress={this.submitForm} />
      </View>
    ); 
  }
}

export default compose(graphql(updateNoteMutation, {name: "updateNoteMutation"}))(UpdateNote);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  text: {
  	textAlign: 'center',
  	fontSize: 20,
  	fontWeight: '600',
    color: 'green',
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