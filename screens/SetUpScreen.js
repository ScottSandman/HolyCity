import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SetUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Set Up',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Set up options screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
