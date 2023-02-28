import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class TaskScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
        <View style={styles.blueBox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  purpleBox: {
    backgroundColor: '#581845',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: 100,
  },
  orangeBox: {
    backgroundColor: '#FA814B',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    right: -100
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  }
});
