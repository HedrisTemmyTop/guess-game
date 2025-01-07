import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../helper/colors";

const GameOver = ({ guessRounds, userChoice }) => {
  // console.log("GameOver.js", guessRounds, userChoice);
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.text}>Number of rounds: {guessRounds}</Text>
      <Text style={styles.text}>Number was: {userChoice}</Text>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: "50%",
    width: 400,
    height: 400,
    borderWidth: 1,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: Colors.primary800,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
