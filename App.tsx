import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screen/BoxObjectModelScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* // <HiScreen />
      // <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
