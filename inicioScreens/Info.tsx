import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';


function QueEsScreen() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>¿Qué es?</Text>
        <Image style={styles.image}    source={require('../images/queesTOC.jpg')} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae et tenetur magnam recusandae quaerat accusamus facere rem pariatur quidem error, voluptate dignissimos rerum reiciendis ullam quas nobis a placeat. Officia cupiditate id hic numquam qui nam tempora ex rem facilis ab ullam perferendis consequatur soluta repellendus harum, sapiente explicabo?</Text>
      </View>
      </ScrollView>
    );
  }
  
  function CaracteristicasScreen() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container} >
        <Text style={globalStyles.title}>¿Características?</Text>
        <Image style={styles.image}    source={require('../images/caracteristicasTOC.png')} />
        <Text  style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident delectus tempora placeat soluta itaque aspernatur inventore, officiis in saepe necessitatibus. Quis animi ex commodi sit sapiente voluptatem expedita rem libero labore, itaque cupiditate beatae autem quia soluta ducimus. Officiis dignissimos dolor magni modi asperiores iure in natus fugiat quam ratione culpa molestiae accusantium neque ex placeat, beatae laboriosam aliquid, architecto amet dolorem dolore sit dolores tempora commodi? Illo dolorem dolor culpa? Perspiciatis commodi atque quae? Eum voluptatum aliquid autem placeat, aut animi perspiciatis officiis nisi. Unde iste perferendis necessitatibus reiciendis. Inventore obcaecati ratione architecto quae et fugit numquam quaerat veritatis commodi id fugiat aut molestiae provident libero, dolore itaque, asperiores officia unde perspiciatis esse ex dolores nihil necessitatibus adipisci. Magnam excepturi cum explicabo reprehenderit. Velit in, saepe impedit perspiciatis nostrum sed maxime optio tempore quo quasi explicabo doloremque ea harum cum consequatur rerum fuga itaque distinctio pariatur magni quaerat libero.</Text>
      </View>
      </ScrollView>
    );
  }
  
  function ComoIdentificarloScreen() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>¿Cómo identificarlo?</Text>
        <Image style={styles.image}    source={require('../images/comoidentificarloTOC.jpg')} />
        <Text  style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga pariatur accusantium illum. Error voluptatem voluptatibus blanditiis facere quam. Fuga magnam sed voluptatem aliquam optio accusamus hic laboriosam officia cum libero eum quam consequatur, placeat ipsam earum quibusdam, unde nemo, voluptates qui ipsum maxime? Natus alias esse eveniet repellendus neque nesciunt facilis suscipit voluptatum ipsam provident fugiat pariatur nobis, aliquam error ut repudiandae in sit, ipsum aspernatur est eligendi voluptatem? Quasi modi, hic assumenda accusamus voluptates tempore corrupti quibusdam aliquam eligendi sapiente earum enim maiores amet consectetur saepe. Dicta assumenda exercitationem in magnam hic consectetur voluptatum odit, sequi est modi excepturi ad, minus consequuntur veniam quisquam magni, autem nihil cumque quasi. Deserunt quis, quam architecto maxime harum voluptatem temporibus possimus? Corporis, eaque! Adipisci laudantium, sit odit assumenda atque quasi est. Non esse alias quam libero laudantium nesciunt consequuntur, neque dignissimos voluptates eveniet saepe totam deleniti veniam sequi voluptas porro, beatae similique vel! Enim eum sint fuga sunt vel recusandae nesciunt quibusdam quia ducimus vitae iusto, suscipit beatae pariatur nisi blanditiis repellendus in aperiam debitis aliquam, id ex atque. Dolores deserunt beatae nulla quasi fugit possimus ullam dicta sapiente, optio soluta quam magni, quos fugiat dolorum adipisci odit obcaecati. Dolores quidem accusamus, dolore porro illum odit fugiat dicta corporis veritatis aspernatur ab, fuga cupiditate nobis. Aspernatur, libero. Iusto illum ipsam, soluta nisi, quos consequatur corporis assumenda similique rem asperiores eos incidunt nobis eius tempore alias pariatur earum sequi, vitae molestiae officia possimus ad ratione. Error exercitationem expedita doloremque porro ipsam doloribus id totam voluptas ad repellendus maiores rerum sint mollitia dignissimos, iusto molestiae voluptatibus cum nam quidem officiis. Eius velit accusantium blanditiis laboriosam omnis deserunt vero! Blanditiis consequuntur nisi ipsam illo eos repellendus beatae officiis, soluta nobis voluptate consectetur. Quae ipsum unde facere delectus eos? Sunt consequatur eaque id alias ipsam!</Text>      
      </View>
      </ScrollView>
    );
  }

export default function Info({msg} : {msg:string}){
  if(msg=="Caracteristicas"){
    return(
      <View >
        <CaracteristicasScreen></CaracteristicasScreen>
      </View>
    )
  }
  if(msg=="¿Que es?"){
    return(
      <View >
        <QueEsScreen></QueEsScreen>
      </View>
    )
  }
  if(msg=="¿Como identificarlo?"){
    return(
      <View >
        <ComoIdentificarloScreen></ComoIdentificarloScreen>
      </View>
    )
  }
  else{
    return(
      <View style={styles.container}>
      <ScrollView >
          <QueEsScreen></QueEsScreen>
          <ComoIdentificarloScreen></ComoIdentificarloScreen>
          <CaracteristicasScreen></CaracteristicasScreen>
      </ScrollView>
      </View>
      )
  }
  }
  const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    scrollViewContent: {
      padding: 20,
      color:'blue',
    },
    image:{
      width:320,
      height:280,
      borderRadius:20,
    },
    text:{
      textAlign:'justify',
    }
})