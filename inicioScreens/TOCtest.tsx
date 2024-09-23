import { useState } from "react";
import { Text, View,FlatList, Pressable, StyleSheet, Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";



interface TOCtest{
    id:string,
    text:string
}



export default function TOCtest(){
   
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  // Lista de preguntas
  const questions: TOCtest[] = [
    { id: "1", text: '¿Tienes pensamientos o imágenes no deseadas que se repiten con frecuencia?' },
    { id: "2", text: '¿Te sientes obligado a repetir ciertas acciones incluso cuando sabes que no es necesario?' },
    { id: "3", text: '¿Te molesta mucho cuando las cosas no están perfectamente ordenadas o alineadas?' },
    { id: "4", text: '¿Te sientes ansioso si no puedes realizar una de tus compulsiones?' },
    { id: "5", text: '¿Tienes un miedo persistente a los gérmenes o la contaminación?' },
    { id: "6", text: '¿Te encuentras verificando cosas varias veces para asegurarte de que están correctas?' },
  ];

  // Función para agregar o actualizar la respuesta de una pregunta
  function putAnswers(questionId: string, response: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: response, // Actualiza o agrega la respuesta por el id de la pregunta
    }));
  }

    function Results(){
      const positiveAnswers = Object.values(answers) .filter((answer) => answer === "Yes").length;
      if(positiveAnswers >= 3){
        alert("Es recomendable que hables con un profesional de la salud mental. te recomendamos revisar nuestros centros de ayuda")

      }
      else{
        alert("probablemente no tienes TOC, pero si tienes dudas te recomendamos revisar nuestros centros de ayuda")


      }
    }
       

    return(
      <ScrollView>
        <View style={styles.container}>
            <FlatList 
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>
            <View>
                <Text>{item.text}</Text>

                <View style={styles.buttons}>
                  <Pressable style={answers[item.id] === "Yes" ? styles.btnPress : styles.button} onPress={()=>putAnswers(item.id,"Yes")}>
                      <Text>Si</Text>
                  </Pressable>
                  <Pressable  style={answers[item.id] === "No" ? styles.btnPress : styles.button}
                    onPress={()=>putAnswers(item.id,"No")}>
                      <Text>No</Text>
                  </Pressable>
                </View>
            </View>
            }>
            </FlatList>  
            <Pressable onPress={Results} style={styles.buttonResult}>
              <Text>Ver resultado</Text>  
            </Pressable> 
        </View>
        </ScrollView>

    );
}

const styles=StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center'
    },
    buttons:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    
    button:{
      borderRadius:10,
      borderWidth:1,
      width:50,
      height:50,
      padding:10,
      justifyContent:'center',
      alignItems:'center'
      
    },
    btnPress: {
      borderRadius:10,
      borderColor: 'blue',
      backgroundColor:"#9BDAFE",
      borderWidth: 1,
      width:50,
      height:50,
      padding:10,
    },
    buttonResult:{
      borderWidth: 1,
      width:100,
      padding:10,
      borderRadius:20,
      backgroundColor:'#E5DDEF'

    }
})