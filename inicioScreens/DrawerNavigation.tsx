import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import ListaCentros from './ListaCentros';
import HomeScreen from './Homescreen';
import Test from './Test';
import TOCtest from './TOCtest';

// Drawer Navigator

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        
        screenOptions={{
          headerShown: false ,
        }}
      >
        
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} msg=" " />}
        </Drawer.Screen>

        <Drawer.Screen name="Caracteristicas">
          {(props) => <HomeScreen {...props} msg="Caracteristicas" />}
        </Drawer.Screen>
  
        <Drawer.Screen name="¿Que es?" > 
        {(props) => <HomeScreen {...props} msg="¿Que es?" />}
        </Drawer.Screen>
  
        <Drawer.Screen name="¿Como identificarlo?">
        {(props) => <HomeScreen {...props} msg="¿Como identificarlo?" />}
        </Drawer.Screen>
  
        <Drawer.Screen name='centros' component={ListaCentros} />

        <Drawer.Screen name='Test' component={TOCtest} />
        
      </Drawer.Navigator>
    );
  }