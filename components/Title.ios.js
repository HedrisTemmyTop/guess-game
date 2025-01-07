import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderColor: "#fff",
    padding: 12,
    textAlign: "center",
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
