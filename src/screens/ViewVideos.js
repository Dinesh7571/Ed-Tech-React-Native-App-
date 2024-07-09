import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ViewVideos = ({route}) => {
    const { url } = route.params;
    console.log(url)
  return (
   
      <WebView
          source={{
            uri:url,
          }}/>
   
  )
}

export default ViewVideos

const styles = StyleSheet.create({})