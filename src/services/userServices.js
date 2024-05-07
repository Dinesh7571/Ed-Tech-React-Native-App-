import axios from "axios";
import apiClient from "../utils/apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from 'jwt-decode'
export async function signup (name,email,password) {
    const{ data }=await apiClient.post("/register" ,{name,email,password})
    await AsyncStorage.setItem("authToken",data.token)
    console.log("authToken:",data)

}


export const fetchUserData = async () => {
    
      const token = await AsyncStorage.getItem('authToken');
     
      const response = await apiClient.post(
        '/me',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (Date.now() >= response.data.exp * 1000) {
        AsyncStorage.removeItem('authToken')
      } else {
       return response.data
      }


  };
