import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/Card";
import Instruction from "../components/Instruction";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../helper/colors";

const StartGame = ({ onPickNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const handleConfirm = function () {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredValue(""),
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  const handleReset = function () {
    setEnteredValue("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter a number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEnteredValue(text)}
          value={enteredValue}
        />

        <View style={styles.btnContainer}>
          <View style={styles.btnWrapper}>
            <PrimaryButton pressHandler={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnWrapper}>
            <PrimaryButton pressHandler={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
  },
  btnWrapper: {
    flex: 1,
  },
  numberInput: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,

    textAlign: "center",
    height: 50,
    width: 50,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,

    alignItems: "center",
  },
});
