import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../helper/colors";

const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed ? [styles.btnContainer, styles.pressed] : styles.btnContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  btnContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
