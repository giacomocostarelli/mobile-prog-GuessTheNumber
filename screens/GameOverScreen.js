import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is Over!</Text>
			<Text>Number of Rounds: {props.roundsNumber} </Text>
			<Text>Number of Rounds: {props.roundsNumber} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GameOverScreen;
