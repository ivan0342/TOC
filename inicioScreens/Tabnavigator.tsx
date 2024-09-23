import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import IconContainer from './IconContainer';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';


import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import StackNavigator from './StackNavigator';


// Tab Navigator (Barra de navegación inferior)
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return (
                <IconContainer>
                  <Entypo name="home" size={24} color={color} />
                </IconContainer>
              );
            } else if (route.name === 'Profile') {
              return (
                <IconContainer>
                  <MaterialCommunityIcons name="account" size={24} color={color} />
                </IconContainer>
              );
            } else if (route.name === 'Settings') {
              return (
                <IconContainer>
                  <Ionicons name="settings" size={24} color={color} />
                </IconContainer>
              );
            }
          },
          tabBarStyle: {
            backgroundColor: '#A796EF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            height: 70,
          },
          tabBarItemStyle: {
            borderRadius: 100,
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false,
        })}
      >
        
        <Tab.Screen name ="Home" component={StackNavigator} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
      </Tab.Navigator>
    );
  }

  export default TabNavigator;