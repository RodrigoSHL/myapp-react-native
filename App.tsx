import React from 'react';
import {SafeAreaView} from 'react-native';
import TaskScreen from './src/screen/TaskScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HiScreen /> */}
      {/* <CounterScreen />  */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TaskScreen/>
    </SafeAreaView>
  );
};
