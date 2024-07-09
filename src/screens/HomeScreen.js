import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View  style={styles.main}>
      <Text>HomeScreen</Text>
      <Icon name="star" size={30} color="#000" />
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