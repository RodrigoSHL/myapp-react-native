import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  const onPressLearnMore = () => {
    setCounter(prev => prev + 1)
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2FE3A6',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
          top: -10,
        }}>
        Counter: {counter}
      </Text>

      <Button
        onPress={onPressLearnMore}
        title="+"
        color="black"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
