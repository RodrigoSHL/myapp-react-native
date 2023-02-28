import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box1</Text>
      <Text style={styles.box2}>Box2</Text>
      <Text style={styles.box3}>Box3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
});
