import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, FlatList, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ExpandedLayout from "./ExpandedLayout";
import data from "../jsons/centros.json";

const imageMap = {
  "imss.png": require("../images/imss.png"),
  "ApsiG.jpg": require("../images/ApsiG.jpg"),
  "anonimo.jpg": require("../images/anonimo.jpg"),
};

export default function ListaCentros() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.containersCentro}>
            <Image style={styles.images} source={imageMap[item.image]} />
            <View style={styles.content}>
              <ExpandedLayout
                icon={
                  <MaterialCommunityIcons
                    name="phone-in-talk"
                    size={24}
                    color="black"
                  />
                }
                mensaje={item.numero}
              />
              <ExpandedLayout
                icon={
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={24}
                    color="black"
                  />
                }
                mensaje={item.ubication}
              />
              <ExpandedLayout
                icon={
                  <MaterialCommunityIcons
                    name="message-text-outline"
                    size={24}
                    color="black"
                  />
                }
                mensaje={item.message}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containersCentro: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 50,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
