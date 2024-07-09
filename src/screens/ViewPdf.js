import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
 const ViewPdf = ({route}) => {
  const navigation=useNavigation()
    const { url } = route.params;
   console.log("pdf url:"+url)
   return(
   <>
    <View style={{height:'100%',width:"100%"}} >
      <WebView
          source={{
            //uri:url
            uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`,
          }}/>
    </View>
   <TouchableOpacity activeOpacity={0.7} style={styles.backButton} onPress={()=>navigation.goBack()} >
   <Icon name='chevron-back-circle-outline' size={50} color='#000' />
   </TouchableOpacity>
  
  </>
       
        
        )

    }
    export default ViewPdf
const styles = StyleSheet.create({
 
    backButton:{
      flex:1,
      alignItems:'center',
      height:50,
      width:50,
      borderRadius:30,
      backgroundColor:'white',
      position:'absolute',
     margin:20,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
   shadowOpacity: 0.29,
   shadowRadius: 4.65,
   elevation: 7,
   }
});