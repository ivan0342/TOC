import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import DrawerNavigation from './DrawerNavigation';
import ProfileScreen from './ProfileScreen';

import IconTopContainer from './iconTopcontainer';
import globalStyles from '../styles/globalStyles';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();
export default function StackNavigator() {
    const navigation = useNavigation();
    return (
      <Stack.Navigator
      initialRouteName ="Home"
      screenOptions={{
        headerShown: true,
      }}
      >
        
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{
            headerShown:true,
            header: () => (
              <View style={globalStyles.navbarTop}>
                <IconTopContainer>
                  <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Entypo name="menu" size={40} color="black" />
                  </Pressable>
                </IconTopContainer>
                <IconTopContainer>
                  <FontAwesome5 name="brain" size={24} color="black" />
                </IconTopContainer>
              </View>
            ),
          }}
        />
        <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}  // Oculta el header para la pantalla Profile
            />
        <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}  // Oculta el header para la pantalla Profile
            />
        
      </Stack.Navigator>
    );
  }

