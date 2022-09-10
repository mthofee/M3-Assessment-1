//import liraries
import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// create a component
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Image style={styles.image} source={require("./img/img1.jpg")} />
        <Image style={styles.image} source={require("./img/img2.jpg")} />
        <Image style={styles.image} source={require("./img/img3.jpg")} />
        <Image style={styles.image} source={require("./img/img4.jpg")} />
        <Image style={styles.image} source={require("./img/img5.jpg")} />
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCEDC8",
  },

  image: {
    height: 250,
    width: 250,
  },
});

//make this component available to the app
export default Home;
