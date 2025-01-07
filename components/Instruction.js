import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../helper/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
