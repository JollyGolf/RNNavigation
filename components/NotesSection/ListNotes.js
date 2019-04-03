import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';

import NoteDetails from './NoteDetails';
import AddNote from './AddNote';
import RemoveNote from './RemoveNote';
import UpdateNote from './UpdateNote';
import SingleNote from './SingleNote';

import { getNotesQuery } from './queries/queries';

class ListNotes extends React.Component {
  displayNotes(){
  	let { data } = this.props;
  	if(!data.loading) return data.notes.map(note => <SingleNote key={ note.id } noteId={ note.id } noteTitle={ note.title }/> );
  }
  render() {  
    return (
      <ScrollView style={styles.container}>
        {this.displayNotes()}
        <AddNote />
        <RemoveNote />
        <UpdateNote />
      </ScrollView> 
    ); 
  }
}

export default graphql(getNotesQuery)(ListNotes);

const styles = StyleSheet.create({
  container: {
  	paddingTop: 15,
  	paddingBottom: 15,
    flex: 1,
    backgroundColor: '#353535',
    color: '#fff',
    fontWeight: '600'
  },
  text: {
    color: '#fff',
    padding: 10,

  }
});


/* In ScrollView

ref={ ref => this.scrollView = ref }
onContentSizeChange={ () => this.scrollView.scrollToEnd( { animated: true } )}

*/