import React from 'react';
import {SafeAreaView} from 'react-native';
import FlexScreen from './src/screen/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HiScreen /> */}
      {/* <CounterScreen />  */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionScreen/> */}
      {/* <PositionScreen/> */}
      <FlexScreen/>
    </SafeAreaView>
  );
};
