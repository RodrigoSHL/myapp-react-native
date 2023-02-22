import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screen/BoxObjectModelScreen';
import { DimensionScreen } from './src/screen/DimensionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HiScreen /> */}
      {/* <CounterScreen />  */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionScreen/>
    </SafeAreaView>
  );
};
