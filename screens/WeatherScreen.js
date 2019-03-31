import React from 'react'; 
import { View, StyleSheet, Text, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { API_KEY } from '../components/WeatherSection/API_WEATHER_KEY';

import Weather from '../components/Weather';
import { Location, IntentLauncherAndroid } from 'expo';

export default class WeatherScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      temperature: 0,
      weatherCondition: null
    };
  }
  static navigationOptions = { header: null, title: `Have a good day :)` };

  componentDidMount() {
    function checkEnableLocation() { 
      Promise.resolve(Location.hasServicesEnabledAsync()).then(value => {
        if(!value) IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS).then(() => checkEnableLocation());
      });
    }
    checkEnableLocation();
    this.fetchWeather();
  } 

  fetchWeather(lat = 50.901829, lon = 34.814869) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.isLoading ? <Text>Fetching The Weather</Text> : <Weather weather={this.state.weatherCondition} t={this.state.temperature}/> }
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
