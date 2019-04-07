import React from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native';

export default class VerifyScreen extends React.Component {
  static navigationOptions = { title: 'Verify Number' };
  constructor(props){
    super(props);
    this.state = {
      isFetchData: false, 
    };
  }
  displayVerify = (data) => {
  	if(data) {
  	  if(data.valid) {
        const { carrier, country_code, country_name, country_prefix, international_format, line_type, local_format, location, number, valid } = data;
        return (
          <View style={styles.containerForDetails}>
            <Text style={styles.text}>Operator: {carrier ? carrier : 'undefined'}</Text>
            <Text style={styles.text}>Country code: {country_code ? country_code : 'undefined'}</Text>
            <Text style={styles.text}>Country: {country_name ? country_name : 'undefined'}</Text>
            <Text style={styles.text}>Country prefix: {country_prefix ? country_prefix : 'undefined'}</Text>
            <Text style={styles.text}>International format: {international_format ? international_format : 'undefined'}</Text>
            <Text style={styles.text}>Local format: {local_format ? local_format : 'undefined'}</Text>
            <Text style={styles.text}>Type: {line_type ? line_type : 'undefined'}</Text>
            <Text style={styles.text}>Location: { location ? location : 'undefined'}</Text>
          </View>
        )
      };
  	}
  }
  fetchVerify = number => {
  	if(number.length > 12 ) fetch(`http://apilayer.net/api/validate?access_key=840cf3f61f56fcfb10f22c19e4289513&number=${number}&format=1`)
    .then(res => res.json()).then(json => this.setState({isFetchData: json}));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.containerForInput}>
            <Text style={styles.text}>Number:  </Text>
            <TextInput style={styles.input} onChangeText={value => this.fetchVerify(value)} />
          </View> 
          {this.displayVerify(this.state.isFetchData)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    height: '100%'
  },
  containerForInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderTopColor: '#353535',
    borderTopWidth: 2,
    borderBottomColor: '#353535',
    borderBottomWidth: 2,
  }, 

  input: {
    height: 30, 
    borderColor: 'grey', 
    borderWidth: 2,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '70%'
  },
  containerForDetails: {
    padding: 10
  },
  text: {
  	fontWeight: '800',
  	fontSize: 15
  }
});