import { StyleSheet, Text, View, ScrollView, Pressable,ImageBackground } from 'react-native';
import globalStyles from '../styles/globalStyles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';

export default function SettingsScreen() {
    const navigation = useNavigation();
    return (
      <View style={globalStyles.container}>
        <ImageBackground style={globalStyles.background} source={require('../images/settings.jpg')}>
        
        <View style={styles.containerbuttons}>
         <Pressable style={styles.butons} onPress={()=>navigation.navigate('ProfileScreen')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text>Informacion de cuenta</Text>
        </Pressable>

        <Pressable style={styles.butons} onPress={()=>navigation.navigate('PrivacityScreen')}>
          <MaterialCommunityIcons name="lock" size={24} color="black" />
          <Text>privacidad</Text>
        </Pressable>

        <Pressable style={styles.butons}>
          <MaterialCommunityIcons name="logout" size={24} color="black" />
          <Text>Cerrar secion</Text>
        </Pressable>
        </View>

     </ImageBackground>
       


      </View>
    );
  }

  const styles=StyleSheet.create({
    containerbuttons:{
        flex:2,
        justifyContent: 'center', // Centra el contenedor en la vertical
        alignItems: 'center',  
        marginTop:100,
    },
    butons:{
      backgroundColor:'#E5DDEF',
      width:250,
      borderWidth:1,
      borderRadius:20,
      paddingVertical:10,
      paddingHorizontal:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    }
  })