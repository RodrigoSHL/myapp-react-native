import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>FlexScreen</Text>
      <Text style={styles.box2}>FlexScreen</Text>
      <Text style={styles.box3}>FlexScreen</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lightblue'
    },
    box1:{
        flex:1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box2:{
        flex:2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    box3:{
        flex:6,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
})