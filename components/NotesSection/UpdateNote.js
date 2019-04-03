import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getNotesQuery, updateNoteMutation } from './queries/queries';
import { UpdateForm, UpdateNoteOptionForm, UpdateformStyles, optionsUpdateForm } from './forms/updateNoteForm';

class UpdateNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMountBlock: false
    } 
  } 
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
  resolveRenderComponent = () => this.setState({isMountBlock: !this.state.isMountBlock });
  componentDidUpdate(){
    if(this.state.isMountBlock) {
      return (
      <Fragment>
        <UpdateForm ref={c => this._form = c} type={ UpdateNoteOptionForm } option={ optionsUpdateForm } />
        <Button title="Update Note" onPress={this.submitForm} />
      </Fragment> 
      )  
    } else return null;
  }
  render() {  
    return (
      <View style={styles.container}> 
      	<Text style={styles.text} onPress={this.resolveRenderComponent}>Update Note</Text>
        { this.componentDidUpdate() }
      </View> 
    ); 
  }
}

export default compose(graphql(updateNoteMutation, {name: "updateNoteMutation"}))(UpdateNote);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f0ff',
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
    color: 'blue',
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