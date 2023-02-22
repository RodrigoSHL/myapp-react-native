import { StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

export const DimensionScreen = () => {

  const {width, height} = useWindowDimensions()
  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.purpleBox,
          width: width * 1
          }}/>
      </View>
      <Text>width: {width}, height: {height}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'lightblue'
  },
  purpleBox: {
    backgroundColor: '#581845',
    width: '50%',
    height: '50%'
  },
  orangeBox: {
  },
  title:{
    fontSize:10
  }
});
