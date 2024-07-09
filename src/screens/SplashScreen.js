import { StyleSheet, Text, View,StatusBar, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#011b31"}}>
      <StatusBar backgroundColor={'#011b31'}/>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  logo: {
    height: 190,
    width: 190,
    marginBottom: 20
  },
})