import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UpdateScreen extends React.Component {
  static navigationOptions = {
    title: 'Update Tournament',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Options to update schedule</Text>
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
