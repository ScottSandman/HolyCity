import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { WebBrowser } from 'expo'
// import { twitterFeed } from '../api/twitterFeedApi'

export default class TwitterFeedScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={'logo-twitter'} size={25} color='white' />
    )
  };

  state = {
    feed: null,
  }

  getFeedAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://twitter.com/HolyCityClassic?ref_src=twsrc%5Etfw')
    // const results = await twitterFeed()
    this.setState({feed: result})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title = 'Follow us on Twitter'
          onPress = {this.getFeedAsync.bind(this)}
        />

        <Text>{this.state.feed && JSON.stringify(this.state.result)}</Text>
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
