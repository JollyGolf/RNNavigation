import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import WeatherComponent from './WeatherComponent';

export default class Weather extends React.Component{
  render(){
    const { t, weather } = this.props;
    if(weather === "Clear") return <WeatherComponent             t={ t } color="#f7b733" icon="sunny"     title="So Sunny"          subTitle="It hurts my eyes!"      />
    else if(weather === "Rain") return <WeatherComponent         t={ t } color="#005BEA" icon="rainy"     title="Raining"           subTitle="Get a cup of coffee"    />
    else if(weather === "Thunderstorm") return <WeatherComponent t={ t } color="#616161" icon="lightning" title="A Storm is coming" subTitle="Because Gods are angry" />
    else if(weather === "Clouds") return <WeatherComponent       t={ t } color="#1F1C2C" icon="cloudy"    title="Clouds"            subTitle="Everywhere"             />
    else if(weather === "Snow") return <WeatherComponent         t={ t } color="#00d2ff" icon="snowy"     title="Snow"              subTitle="Get out of my snowman"  /> 
    else if(weather === "Drizzle") return <WeatherComponent      t={ t } color="#076585" icon="hail"      title="Drizzle"           subTitle="Partially raining..."   /> 
    else if(weather === "Haze") return <WeatherComponent         t={ t } color="#66A6FF" icon="hail"      title="Haze"              subTitle="Don't roam in forests!" /> 
    else if(weather === "Mist") return <WeatherComponent         t={ t } color="#3CD3AD" icon="fog"       title="Mist"              subTitle="Don't roam in forests!" /> 
    else return null;
  }
};

Weather.propTypes = { t: PropTypes.number.isRequired, weather: PropTypes.string };

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
