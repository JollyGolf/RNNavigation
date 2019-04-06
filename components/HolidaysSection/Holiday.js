import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Holiday extends React.Component {
  render() {
  	const {name, type, date, description} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.date}>{date.replace(/-/g, '.')}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.type}>Type: {type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  title: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderTopColor: '#353535',
    borderTopWidth: 2
  },
  date: {
  	fontWeight: '800',
  	fontSize: 17,
  	padding: 5
  },
  name: {
  	fontWeight: '800',
  	fontSize: 17,
  	padding: 5
  },
  description: {
  	fontWeight: '800',
  	fontSize: 15,
  	padding: 10
  },
  type: {
  	padding: 10,
  	fontWeight: '800',
    fontSize: 15,
    borderTopColor: '#353535',
    borderStyle: 'dashed',
    borderTopWidth: 1
  }
});
