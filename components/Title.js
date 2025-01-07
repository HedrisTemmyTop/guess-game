import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
});

export default Title;
