import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';


import Info from './Info';

export default function HomeScreen({route,msg} : { route: any; msg: string }) {
    const { mensaje } = route.params || { mensaje: 'Mensaje por defecto' };
    return (
      <View>
        <Info msg={msg}></Info>
      </View>
      
    );
  }