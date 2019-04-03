import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, addNoteMutation } from './queries/queries';
import { AddForm, AddNoteOptionForm, AddformStyles, optionsAddForm } from './forms/addNoteForm';

class AddNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMountBlock: false
    } 
  } 
  submitForm = () => {
    const value = this._form.getValue();
    console.log(value.title);
    this.props.addNoteMutation({
      variables: {
      	title: value.title,
      	description: value.content
      },
      refetchQueries: [{ query: getNotesQuery}]
    })
  }
  resolveRenderComponent = () => this.setState({isMountBlock: !this.state.isMountBlock });
  componentDidUpdate(){
    if(this.state.isMountBlock) {
      return (
      <Fragment>
        <AddForm ref={c => this._form = c} type={ AddNoteOptionForm } option={ optionsAddForm } />
        <Button title="Add Note" onPress={this.submitForm} />
      </Fragment> 
      )  
    } else return null;
  }
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.text} onPress={this.resolveRenderComponent}>Add Note</Text>
      	{ this.componentDidUpdate() }
      </View>
    ); 
  }
}


export default compose(graphql(addNoteMutation, {name: "addNoteMutation"}))(AddNote);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaffe8',
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    marginRight: 50,
    margin: 10,
    marginLeft: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 3
  },
  text: {
  	textAlign: 'right',
  	fontSize: 20,
  	fontWeight: '600',
    color: 'green',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderBottomColor: '#353535',
    borderBottomWidth: 2,
    borderRightColor: '#353535',
    borderRightWidth: 2,
    marginBottom: 5,
    paddingRight: 20,
    padding: 5
  }
});