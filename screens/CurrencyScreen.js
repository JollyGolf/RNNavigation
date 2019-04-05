import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView,TextInput } from 'react-native';

import CurrencyCalculation from '../components/CurrencySection/CurrencyCalculation';
 
export default class CurrencyScreen extends React.Component {
  static navigationOptions = { title: "Currency" };
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      USD_UAH: '', USD_BTC: '', USD_RUB: '', USD_EUR: '', USD_COUNT: 1,
      UAH_USD: '', UAH_BTC: '', UAH_RUB: '', UAH_EUR: '', UAH_COUNT: 1,
      RUB_UAH: '', RUB_BTC: '', RUB_USD: '', RUB_EUR: '', RUB_COUNT: 1,
      BTC_USD: '', BTC_UAH: '', BTC_RUB: '', BTC_EUR: '', BTC_COUNT: 1,
      EUR_UAH: '', EUR_USD: '', EUR_RUB: '', EUR_BTC: '', EUR_COUNT: 1
    };
  }

  componentDidMount() {
    this.fetchCurrency('BTC_USD', 'USD_BTC');
    this.fetchCurrency('USD_UAH', 'UAH_USD');
    this.fetchCurrency('UAH_BTC', 'BTC_UAH');
    this.fetchCurrency('RUB_UAH', 'UAH_RUB');
    this.fetchCurrency('RUB_BTC', 'BTC_RUB');
    this.fetchCurrency('RUB_USD', 'USD_RUB');
    this.fetchCurrency('RUB_EUR', 'EUR_RUB');
    this.fetchCurrency('UAH_EUR', 'EUR_UAH');
    this.fetchCurrency('USD_EUR', 'EUR_USD');
    this.fetchCurrency('BTC_EUR', 'EUR_BTC');
  }
  fetchCurrency = (fromTo, toFrom) => {
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${fromTo},${toFrom}&compact=ultra&apiKey=89d219f8877bebfb3b63`)
    .then(res => res.json()).then(json => this.setState({ [fromTo]: json[fromTo], [toFrom]: json[toFrom] }));
  }
  render() {
    return (
      <ScrollView>
        { this.state.isLoading ? <Text>Fetching The Currency</Text> : (
          <View style={styles.container}>
            <View style={styles.containerForCurrency}>
              <Text style={styles.text}>USD:</Text>
              <TextInput name="USD" style={styles.input} onChangeText={value => this.setState({USD_COUNT: value})} />
            </View>
            <CurrencyCalculation 
              count={ this.state.USD_COUNT }
              name="USD" 
              nameOfCurrency1="UAH" 
              valueOfCurrency1={ this.state.USD_UAH }
              nameOfCurrency2="BTC" 
              valueOfCurrency2={ this.state.USD_BTC }
              nameOfCurrency3="RUB" 
              valueOfCurrency3={ this.state.USD_RUB }
              nameOfCurrency4="EUR"
              valueOfCurrency4={ this.state.USD_EUR }
            />
            <View style={styles.containerForCurrency}>
              <Text style={styles.text}>UAH:</Text>
              <TextInput name="UAH" style={styles.input} onChangeText={value => this.setState({UAH_COUNT: value})} />
            </View>
            <CurrencyCalculation 
              count={ this.state.UAH_COUNT }
              name="UAH" 
              nameOfCurrency1="USD" 
              valueOfCurrency1={ this.state.UAH_USD }
              nameOfCurrency2="BTC" 
              valueOfCurrency2={ this.state.UAH_BTC }
              nameOfCurrency3="RUB" 
              valueOfCurrency3={ this.state.UAH_RUB }
              nameOfCurrency4="EUR"
              valueOfCurrency4={ this.state.UAH_EUR }
            />
            <View style={styles.containerForCurrency}>
              <Text style={styles.text}>BTC:</Text>
              <TextInput name="BTC" style={styles.input} onChangeText={value => this.setState({BTC_COUNT: value})} />
            </View>
            <CurrencyCalculation 
              count={ this.state.BTC_COUNT }
              name="BTC" 
              nameOfCurrency1="USD" 
              valueOfCurrency1={ this.state.BTC_USD }
              nameOfCurrency2="UAH" 
              valueOfCurrency2={ this.state.BTC_UAH }
              nameOfCurrency3="RUB" 
              valueOfCurrency3={ this.state.BTC_RUB }
              nameOfCurrency4="EUR"
              valueOfCurrency4={ this.state.BTC_EUR }
            />
            <View style={styles.containerForCurrency}>
              <Text style={styles.text}>RUB:</Text>
              <TextInput name="RUB" style={styles.input} onChangeText={value => this.setState({RUB_COUNT: value})} />
            </View>
            <CurrencyCalculation 
              count={ this.state.RUB_COUNT }
              name="RUB" 
              nameOfCurrency1="USD" 
              valueOfCurrency1={ this.state.RUB_USD }
              nameOfCurrency2="UAH" 
              valueOfCurrency2={ this.state.RUB_UAH }
              nameOfCurrency3="BTC" 
              valueOfCurrency3={ this.state.RUB_BTC }
              nameOfCurrency4="EUR"
              valueOfCurrency4={ this.state.RUB_EUR }
            />
            <View style={styles.containerForCurrency}>
              <Text style={styles.text}>EUR:</Text>
              <TextInput name="EUR" style={styles.input} onChangeText={value => this.setState({EUR_COUNT: value})} />
            </View>
            <CurrencyCalculation 
              count={ this.state.EUR_COUNT }
              name="EUR" 
              nameOfCurrency1="USD" 
              valueOfCurrency1={ this.state.EUR_USD }
              nameOfCurrency2="UAH" 
              valueOfCurrency2={ this.state.EUR_UAH }
              nameOfCurrency3="BTC" 
              valueOfCurrency3={ this.state.EUR_BTC }
              nameOfCurrency4="RUB"
              valueOfCurrency4={ this.state.EUR_RUB }
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcabac',//#e5ecff
  },
  input: {
    height: 30, 
    borderColor: 'grey', 
    borderWidth: 2,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '80%'
  },
  containerForCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#afc5ff'
  },
  text: {
    fontWeight: '800'
  }
});

































/* ___USEFULL____FOR____DEVELOPMENT

<Image source={__DEV__ ? require('../assets/images/robot-dev.png') : require('../assets/images/robot-prod.png') } style={styles.welcomeImage} />
<Component contentContainerStyle={styles.contentContainer} />
{ Platform, TouchableOpacity }

CSS.PROPERTIES {
  flex
  resizeMode: 'contain',
  marginHorizontal: 50,
  marginVertical: 7,
  lineHeight: 24,
  ...Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 20,
    },
   }


color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
*/