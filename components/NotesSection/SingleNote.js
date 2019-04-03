import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import NoteDetails from './NoteDetails';

export default class SingleNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMountBlock: false,
      selected: false
    } 
  } 
  
  resolveRenderComponent = () => this.setState({isMountBlock: !this.state.isMountBlock, selected: this.props.noteId });
  componentDidUpdate(){
    if(this.state.isMountBlock) {
      return (
      <NoteDetails noteId={this.state.selected}/> 
      )  
    } else return null;
  }
  render() {  
    return (
      <View style={styles.container}>
      	<Text style={styles.noteName} onPress={this.resolveRenderComponent}>{ this.props.noteTitle }</Text>
      	{ this.componentDidUpdate() }
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 20,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'white',
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white'
  },
  noteName: {
    color: '#0089e0',
    padding: 10,
    paddingLeft: 30,
    fontWeight: '600',
    fontSize: 18,
    
  }
});