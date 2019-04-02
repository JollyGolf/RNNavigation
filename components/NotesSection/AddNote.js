import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';
import t from 'tcomb-form-native';

import { getNotesQuery } from './queries/queries';

const addNoteMutation = gql`
  mutation($title: String!, $description: String!) {
    addNote(title: $title, description: $description){
      title
      description
    }
  }
`;

const AddForm = t.form.Form;

const AddNoteOptionForm = t.struct({
  title: t.String,
  content: t.String
});

const AddformStyles = {
  ...AddForm.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
};

const optionsAddForm = {
  fields: {
  	title: { error: 'Input title, Please' },
  	content: { error: 'Input content, Please' }
  },
  stylesheet: AddformStyles,
};

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
      	<Text>Add Note</Text>
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
    //justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#fff',
    padding: 10
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