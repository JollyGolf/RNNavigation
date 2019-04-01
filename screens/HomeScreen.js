import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

const currentTitle = "Home";

export default class HomeScreen extends React.Component {
  static navigationOptions = { /*header: null,*/ title: currentTitle };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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