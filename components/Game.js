import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Game = props => (
  <View flexDirection='row' style={{paddingTop: 10}}>
    <Text>{props.gameNum}</Text>
    <Text>{props.gameTime}</Text>
    <Text>{props.homeTeam}</Text>
    <Text<{props.awayTeam}</Text>
    <Text>{props.fieldName}</Text>
  </View>
);

export default Game
