import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/Card";
import GuessLog from "../components/GuessLog";
import Instruction from "../components/Instruction";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const generateRandomBetween = function (min, max, exclude) {
  console.log(min, max, exclude);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoice, onGameOver, handleGuessRound }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  const roundsLength = rounds.length;
  const handleNextGuess = function (direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setRounds((prev) => [newRandomNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      handleGuessRound(roundsLength);
      onGameOver(true);
    }
  }, [currentGuess, userChoice, onGameOver]);
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.instructionTxt}>
          Higher or lower ?
        </Instruction>
        <View style={styles.btnConatiner}>
          <View style={styles.btnWrapper}>
            <PrimaryButton pressHandler={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnWrapper}>
            <PrimaryButton pressHandler={handleNextGuess.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View>
          <View style={styles.btnConatinerWide}>
            <PrimaryButton pressHandler={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.btnWrapper}>
            <PrimaryButton pressHandler={handleNextGuess.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {rounds.map((round) => (
        <Text key={round}>{round}</Text>
      ))} */}
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <GuessLog roundNumber={roundsLength - index} opponentGuess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,
    alignItems: "center",
  },
  btnConatiner: {
    flexDirection: "row",
  },
  btnWrapper: {
    flex: 1,
  },
  instructionTxt: {
    marginBottom: 12,
  },
  listContainer: {
    padding: 16,
    flex: 1,
  },
  btnConatinerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
