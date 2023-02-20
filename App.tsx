import React from 'react'
import { Text, View } from 'react-native'

export const App = () => {
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
        Mi first App
      </Text>
    </View>
  )
}
