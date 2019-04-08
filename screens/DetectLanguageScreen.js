import React from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native';

export default class DetectLanguageScreen extends React.Component {
  static navigationOptions = { title: 'Detect Language' };
  constructor(props){
    super(props);
    this.state = {
      text: false,
      isFetchData: false, 
    };
  }
  displayVerify = (data) => {
    if(data) {
      const { language, confidence, isReliable } = data;
      return (
        <View style={styles.containerForDetails}>
          <Text style={styles.text}>Text: {this.state.text}</Text>
          <Text style={styles.text}>Detected Language: {language}</Text>
          <Text style={styles.text}>Confidence: {confidence} point</Text>
          <Text style={styles.text}>Reliability: {isReliable ? 'Yes' : 'No'}</Text>
        </View>
      )
    }
  }
  fetchDetect = text => {
    if(text.length > 0 ) fetch(`https://ws.detectlanguage.com/0.2/detect?q=${encodeURI(text)}&key=8991fbaea8a07913c6f879c604e134e1`)
    .then(res => res.json()).then(json => this.setState({isFetchData: json.data.detections[0], text: text}));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.containerForInput}>
            <Text style={styles.text}>Detect Language:  </Text>
            <TextInput style={styles.input} onChangeText={value => this.fetchDetect(value)} />
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
    width: '60%'
  },
  containerForDetails: {
    padding: 10
  },
  text: {
    fontWeight: '800',
    fontSize: 15
  }
});