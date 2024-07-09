// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar,StyleSheet,View,Text,Pressable } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fetchUserData } from './src/services/userServices';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlurView } from "@react-native-community/blur";
import Roadmaps from './src/screens/Roadmaps';
import ViewPdf from './src/screens/ViewPdf';
import VideoResource from './src/screens/VideoResource';
import ViewVideos from './src/screens/ViewVideos';
import Notes from './src/screens/Notes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const CustomBottomTab = ({state,descriptors,navigation}) => {
  return (
    <View
     style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
       
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index} 
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={styles.contentContainer}>
            <View style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {route.name=='Home'&&  <Icon name='home' size={30} color={isFocused?'#FBF834':'#7743DB'} /> }
              {route.name=='Roadmap'&&  <Icon name='map' size={25} color={isFocused?'#FBF834':'#7743DB'} /> }
              {route.name=='VideoResource'&&  <Icon name='video-camera' size={25} color={isFocused?'#FBF834':'#7743DB'} /> }
              {route.name=='Notes'&&  <Icon name='camera' size={25} color={isFocused?'#FBF834':'#7743DB'} /> }
            </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  )
}



const styles = StyleSheet.create({
  tabBarContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    height:60,
    position:'absolute',
    bottom:'0',
    top:'88%',
    alignSelf:'center',
    backgroundColor:'#FFD31D',
    width:'95%',
    justifyContent:'space-around',
    overflow:'hidden',
    borderRadius:20,
    borderWidth:2,
    borderColor:'#FBF834'

    
  },
  contentContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

})

const BottomTab = () => {
  return (
    <Tab.Navigator
       tabBar={props=><CustomBottomTab {...props}/>}
           screenOptions={({ route }) => ({
            headerShown: false
           })} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Roadmap" component={Roadmaps} />
      <Tab.Screen name="VideoResource" component={VideoResource} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>

  );
};

export default function App() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {


     fetchUserData()
          .then((userData) => {
            
            setAuthUser(userData);
            setIsLoading(false)
            console.log(userData)

          })
          .catch((error) => {
            setIsLoading(false)
            setAuthUser(null);

          });


  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {isLoading && <Stack.Screen name="Splash" component={SplashScreen} />}
        {authUser === null ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : null}
        <Stack.Screen name="BottomTab" component={BottomTab}  />
        <Stack.Screen name="ViewPdf" component={ViewPdf} />
        <Stack.Screen name="ViewVideo" component={ViewVideos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
