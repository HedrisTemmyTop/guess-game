import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../helper/colors";

const GuessLog = ({ roundNumber, opponentGuess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {opponentGuess}</Text>
    </View>
  );
};

export default GuessLog;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-around",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    color: Colors.primary800,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
