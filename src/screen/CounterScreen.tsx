import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="+1" onPress={() => setCounter(counter + 1)} />

      <Fab position='bl' title="-1" onPress={() => setCounter(counter - 1)} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2FE3A6',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    top: -10,
  },
});
