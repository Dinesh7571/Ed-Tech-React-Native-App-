import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View  style={styles.main}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    main:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      backgroundColor:"red"
    }
})