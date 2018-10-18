import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Game = props => (
  <View
    flexDirection = 'row'
    style = {{
      justifyContent: 'center',
      backgroundColor: props.gameNum % 2 === 0 ? 'lightgray':'white',
    }}>
    <Text style={[styles.schedule, {width: '12%'}]}>{props.gameNum}</Text>
    <Text style={[styles.schedule, {width: '12%'}]}>{props.gameTime}</Text>
    <Text style={[styles.schedule, {width: '28%'}]}>{props.homeTeam}</Text>
    <Text style={[styles.schedule, {width: '28%'}]}>{props.awayTeam}</Text>
    <Text style={[styles.schedule, {width: '15%'}]}>{props.fieldName}</Text>
  </View>
);


const styles = StyleSheet.create({
  schedule: {
    borderWidth: 0,
    padding: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default Game
