import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';

import NoteDetails from './NoteDetails';
import AddNote from './AddNote';

import { getNotesQuery } from './queries/queries';

class ListNotes extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	  selected: false
  	}
  }
  displayNotes(){
  	let { data } = this.props;
  	//console.log('data:',data);
  	if(!data.loading) return data.notes.map(note => 
 	  <Text style={styles.noteName} key={ note.id } onPress={ e => { this.setState({ selected: note.id })} } >
  	  	{ note.title }
  	  </Text>
  	);
  }
  render() {  
    return (
      <ScrollView style={styles.container} 
        //ref={ ref => this.scrollView = ref }
    	//onContentSizeChange={ () => this.scrollView.scrollToEnd( { animated: true } )}
    	>
        <Text style={styles.text}>Your Notes:</Text>
        {this.displayNotes()}
        {console.log(this.state.selected)}
        <NoteDetails noteId={ this.state.selected }/>
        <AddNote />
      </ScrollView> 
    ); 
  }
}

export default graphql(getNotesQuery)(ListNotes);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    color: '#fff',
    shadowColor: 'red',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 0
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