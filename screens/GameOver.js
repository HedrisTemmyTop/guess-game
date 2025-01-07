import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../helper/colors";

const GameOver = ({ guessRounds, userChoice }) => {
  // console.log("GameOver.js", guessRounds, userChoice);
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.text}>Number of rounds: {guessRounds}</Text>
        <Text style={styles.text}>Number was: {userChoice}</Text>
      </View>
    </ScrollView>
  );
};

export default GameOver;
// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: "50%",
    // width: deviceWidth < 380 ? 150 : 300,

    // height: 400,
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
