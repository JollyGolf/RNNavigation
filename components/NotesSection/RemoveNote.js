import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, removeNoteMutation } from './queries/queries';
import { RemoveForm, RemoveNoteOptionForm, RemoveformStyles, optionsRemoveForm } from './forms/removeNoteForm';


class RemoveNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMountBlock: false
    } 
  } 
  submitForm = () => {
    const value = this._form.getValue();
    this.props.removeNoteMutation({
      variables: {
      	title: value.title
      },
      refetchQueries: [{ query: getNotesQuery}]
    });
  } 
  resolveRenderComponent = () => this.setState({isMountBlock: !this.state.isMountBlock });
  componentDidUpdate(){
    if(this.state.isMountBlock) {
      return (
      <Fragment>
        <RemoveForm ref={c => this._form = c} type={ RemoveNoteOptionForm } option={ optionsRemoveForm }/>
        <Button title="Remove Note" onPress={this.submitForm} />
      </Fragment> 
      )  
    } else return null;
  }
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.text} onPress={this.resolveRenderComponent}>Remove Note</Text>
        { this.componentDidUpdate() }
      </View>
    ); 
  }
}


export default compose(graphql(removeNoteMutation, {name: "removeNoteMutation"}))(RemoveNote);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe8e8',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    marginLeft: 50,
    margin: 10,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 3
  },
  text: {
  	textAlign: 'left',
  	fontSize: 20,
  	fontWeight: '600',
    color: 'red',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomColor: '#353535',
    borderBottomWidth: 2,
    borderLeftColor: '#353535',
    borderLeftWidth: 2,
    marginBottom: 5,
    paddingLeft: 20,
    padding: 5
  }
});