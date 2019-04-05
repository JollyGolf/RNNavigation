import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CurrencyCalculation extends React.Component {
  render() {
    const {
      count, 
      name, 
      nameOfCurrency1, 
      valueOfCurrency1, 
      nameOfCurrency2, 
      valueOfCurrency2,
      nameOfCurrency3,
      valueOfCurrency3,
      nameOfCurrency4,
      valueOfCurrency4
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{count} {name} ~ { parseInt(count, 10) * valueOfCurrency1} {nameOfCurrency1}</Text> 
        <Text style={styles.text}>{count} {name} ~ { parseInt(count, 10) * valueOfCurrency2} {nameOfCurrency2}</Text> 
        <Text style={styles.text}>{count} {name} ~ { parseInt(count, 10) * valueOfCurrency3} {nameOfCurrency3}</Text> 
        <Text style={styles.text}>{count} {name} ~ { parseInt(count, 10) * valueOfCurrency4} {nameOfCurrency4}</Text> 
      </View>
    );
  }      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  text: {
    fontWeight: '800'
  }
});