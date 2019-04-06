import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Holiday from '../components/HolidaysSection/Holiday';

export default class HolidaysScreen extends React.Component {
  static navigationOptions = { title: 'Ukrainian Holidays' };
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isFetchData: false,
    };
  }
  componentDidMount() {
    this.fetchHolidays();
  }
  displayHoliday = (data) => {
    if(data) return data.map(holiday => {
      const { name, type, date, states, description } = holiday;
      if(description) return <Holiday key={name} description={description} name={name} type={type} date={date.iso.substr(0, 10)}/> 
    });
  }
  fetchHolidays = () => {
    fetch(`https://calendarific.com/api/v2/holidays?country=UA&year=2019&api_key=428e9dee22d8805289f0634f894a968da2435369`)
    .then(res => res.json()).then(json => this.setState({isFetchData: json.response.holidays})); 
  }
  render() {
    return (
      <ScrollView>
        { this.state.isLoading ? <Text>Fetching The Currency</Text> : (
          <View style={styles.container}>
            {this.displayHoliday(this.state.isFetchData)}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

