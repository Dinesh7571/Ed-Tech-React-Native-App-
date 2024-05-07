// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StatusBar, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fetchUserData } from './src/services/userServices';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  
  );
};

export default function App() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   

 fetchUserData()
      .then((userData) => {
        setIsLoading(false)
        setAuthUser(userData);
        console.log(userData)
        
      })
      .catch((error) => {
        setIsLoading(false)
        setAuthUser(null);
        
      });


  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {isLoading && <Stack.Screen name="Splash" component={SplashScreen} />}
      {authUser === null ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : null }
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
