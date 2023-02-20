import React from 'react'
import { Text, View } from 'react-native'

export const HiScreen = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor: '#2FE3A6',
      justifyContent:'center',
    }}>
      <Text style={{
        fontSize:50,
        textAlign:'center'
      }}>
        Hi World!!!
      </Text>
    </View>
  )
}
