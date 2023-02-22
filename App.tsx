import React from 'react';
import {SafeAreaView} from 'react-native';
import { PositionScreen } from './src/screen/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HiScreen /> */}
      {/* <CounterScreen />  */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionScreen/> */}
      <PositionScreen/>
    </SafeAreaView>
  );
};
