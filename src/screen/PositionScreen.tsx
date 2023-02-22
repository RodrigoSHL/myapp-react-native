import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}/>
      <View style={styles.orangeBox}/>
      <View style={styles.greenBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    // height: 300,
    // width: 300
  },
  purpleBox: {
    backgroundColor: '#581845',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    top:0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: '#FA814B',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  greenBox: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    borderWidth: 5,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject
  },
});
