import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { signup } from '../services/userServices';


export default function RegisterScreen() {
  const navigation = useNavigation(); // Get navigation object

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await signup(user.name, user.email, user.password);
      setIsLoading(false);
      console.log("succces login")
       navigation.replace('Home'); 
    } catch (err) {
      setIsLoading(false);
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.inputView} >
        <TextInput
          value={user.name}
          onChangeText={text => setUser({ ...user, name: text })}
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#7797a9"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#7797a9"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          value={user.password}
          onChangeText={text => setUser({ ...user, password: text })}
          secureTextEntry
          style={styles.inputText}
          placeholder="Set Password..."
          placeholderTextColor="#7797a9"
        />
      </View>
      <TouchableOpacity>
        {isLoading && <Text style={styles.forgot}>Loading</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={styles.registerBtn}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} >
      {/* ? <Text style={styles.errorText} onPress={()=> navigation.navigate("Home")}>Home</Text> */}
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
    height: 120,
    width: 120,
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
  registerBtn: {
    width: "80%",
    backgroundColor: "#2C74B3",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  registerText: {
    color: "white"
  },
  errorText: {
    color: "red",
    marginTop: 10
  }
});
