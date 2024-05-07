import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require("../../assets/logo.png")}/>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#7797a9"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#7797a9"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011b31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
   height:120,
   width:120,
    marginBottom: 20
  },
  inputView: {
    width: "80%",
    backgroundColor: "#31363F",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#2C74B3",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});