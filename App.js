import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlayerScreen from './src/PlayerScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000",
    justifyContent: 'center',
  },
})