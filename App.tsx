
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './loginpage/Login'
import Register from './loginpage/Register';
import Inicio from './inicioScreens/Inicio';
import ProfileScreen from './inicioScreens/ProfileScreen';
import VerifyMail  from './OlvidasteTuContraseña/VerifyMail';
import { PrivacityScreen } from './inicioScreens/PrivacityScreen';
import { ChangePassword } from './OlvidasteTuContraseña/ChangePassword';
import { AuthProvider } from './AuthContext';


const Stack = createStackNavigator();

export default function App() {


  return (
   <AuthProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyMail" component={VerifyMail} options={{ headerShown: false }} />
      <Stack.Screen name="PrivacityScreen" component={PrivacityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />

    </Stack.Navigator>
  </NavigationContainer>
  </AuthProvider> 
  );
}

