import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import globalStyles from "../styles/globalStyles";

function QueEsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>¿Qué es?</Text>
        <Image
          style={styles.image}
          source={require("../images/queesTOC.jpg")}
        />
        <Text style={styles.text}>
          El trastorno obsesivo-compulsivo TOC es una enfermedad mental que
          consiste en presentar una y otra vez pensamientos obsesiones y
          rituales compulsiones. Su vida está obstaculizada por estos, pero no
          puede controlarlos ni detenerlos. Un patrón de pensamientos y miedos
          no deseados conocido como obsesiones es parte del trastorno obsesivo
          compulsivo.
        </Text>
        <Text style={styles.text}>
          Estas obsesiones te hacen realizar comportamientos repetitivos,
          también conocidos como compulsiones. Estas obsesiones y compulsiones
          dificultan la vida diaria y causan mucho dolor emocional. El miedo
          excesivo a contaminarse con gérmenes es uno de los temas que con
          frecuencia se discuten en el trastorno obsesivo compulsivo. Es posible
          que te laves las manos una y otra vez hasta que te duelan y se
          agrieten para aliviar el miedo a la contaminación.
        </Text>
      </View>
    </ScrollView>
  );
}

function CaracteristicasScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>¿Características?</Text>
        <Image
          style={styles.image}
          source={require("../images/caracteristicasTOC.png")}
        />
        <Text style={styles.text}>
          Este trastorno puede incluir tanto síntomas de obsesión como
          compulsión.
        </Text>
        <Text style={{ fontWeight: "bold" }}>Compulsión.</Text>
        <View>
          <View>
            <Text style={styles.subtext}>
              • Miedo a contaminarse al tocar objetos que otros han tocado.
            </Text>
            <Text style={styles.subtext}>
              • Dudar si cerraste la puerta con llave o apagaste la cocina.
            </Text>
            <Text style={styles.subtext}>
              • Estrés intenso cuando los objetos no están ordenados u
              orientados de cierta manera.
            </Text>
            <Text style={styles.subtext}>
              • Imágenes mentales de arrollar a una multitud de personas con tu
              automóvil.
            </Text>
            <Text style={styles.subtext}>
              • Pensar en gritar obscenidades o actuar de forma inapropiada en
              público.
            </Text>
            <Text style={styles.subtext}>
              • Imágenes sexuales desagradables.
            </Text>
            <Text style={styles.subtext}>
              • Evitar situaciones que puedan causar obsesiones, como darle la
              mano a alguien.
            </Text>
          </View>
        </View>
        <Text style={{ fontWeight: "bold", marginTop: 30 }}>Obsesión.</Text>
        <View>
          <Text style={styles.subtext}>
            • Miedo a la contaminación o la suciedad.
          </Text>
          <Text style={styles.subtext}>
            • Dudar y tener dificultades para lidiar con la incertidumbre.
          </Text>
          <Text style={styles.subtext}>
            • Necesidad de que las cosas estén ordenadas y equilibradas.
          </Text>
          <Text style={styles.subtext}>
            • Pensamientos agresivos u horribles sobre perder el control y
            hacerte daño o dañar a otras personas.
          </Text>
          <Text style={styles.subtext}>
            • Pensamientos no deseados, como agresiones o temas sexuales o
            religiosos.
          </Text>
          <Text style={styles.subtext}>
            Algunas personas con TOC también tienen un síndrome de Tourette u
            otro trastorno de tics. Los tics son espasmos, movimientos o sonidos
            repentinos que las personas hacen una y otra vez. Las personas con
            tics no pueden evitar que su cuerpo los haga.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function ComoIdentificarloScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>¿Cómo identificarlo?</Text>
        <Image
          style={styles.image}
          source={require("../images/comoidentificarloTOC.jpg")}
        />
        <Text style={styles.text}>
          El trastorno obsesivo compulsivo generalmente comienza en la
          adolescencia o en los primeros años de la edad adulta, pero también
          puede comenzar en la infancia. Los síntomas suelen aparecer
          gradualmente y suelen variar en gravedad a lo largo de la vida.
          Además, los tipos de obsesiones y compulsiones pueden cambiar con el
          tiempo. En situaciones de mucho estrés, como momentos de transiciones
          y cambios, los síntomas suelen empeorar.
        </Text>
        <Text style={styles.text}>
          El trastorno obsesivo compulsivo, que generalmente se considera un
          trastorno de por vida, puede tener síntomas de leves a moderados o ser
          tan grave y requerir tanto tiempo que se vuelve incapacitante. Los
          factores de resigo que más comúnmente se presentan son los siguientes:
        </Text>
        <View>
          <Text style={[{ fontWeight: "bold" }, styles.text]}>
            • Historia familiar:
          </Text>
          <Text style={styles.subtext}>
            Las personas con un pariente de primer grado (padre, hermano o hijo)
            que tiene TOC presentan un mayor riesgo. Esto es especialmente
            cierto si el familiar desarrolló TOC cuando era niño o adolescente.
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            • Estructura y funcionamiento del cerebro:
          </Text>
          <Text style={styles.subtext}>
            Los estudios de imágenes demuestran que las personas con TOC tienen
            diferencias en ciertas partes del cerebro. Los investigadores
            necesitan hacer más estudios para comprender la conexión entre estas
            diferencias cerebrales y el TOC.
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            • Trauma infantil como el abuso infantil:
          </Text>
          <Text style={styles.subtext}>
            Algunos estudios han encontrado un vínculo entre el trauma en la
            infancia y el TOC. Se necesita más investigación para comprender
            mejor esta relación.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default function Info({ msg }: { msg: string }) {
  if (msg == "Caracteristicas") {
    return (
      <View>
        <CaracteristicasScreen></CaracteristicasScreen>
      </View>
    );
  }
  if (msg == "¿Que es?") {
    return (
      <View>
        <QueEsScreen></QueEsScreen>
      </View>
    );
  }
  if (msg == "¿Como identificarlo?") {
    return (
      <View>
        <ComoIdentificarloScreen></ComoIdentificarloScreen>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <QueEsScreen></QueEsScreen>
          <ComoIdentificarloScreen></ComoIdentificarloScreen>
          <CaracteristicasScreen></CaracteristicasScreen>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    padding: 20,
    color: "blue",
  },
  image: {
    width: 320,
    height: 280,
    borderRadius: 20,
    marginTop: 30,
  },
  text: {
    textAlign: "justify",
    justifyContent: "center",
    marginTop: 30,
  },
  subtext: {
    textAlign: "justify",
    justifyContent: "center",
  },
});
