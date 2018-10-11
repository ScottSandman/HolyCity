import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Game } from '../components/Schedule'
import { fetchGames } from '../api/api'

export default class ScheduleScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={'md-baseball'} size={25} color='white' />
    ),
  };

  state = {
    isPosted: false,
    games: null,
  }

  componentDidMount() {
    if (Date.now() > games['scheduleDate']) {
      this.setState({isPosted: true})
      this.getGames()
    }
  }

  getGames = async () => {
    const results = await fetchGames()
    this.setState({games: results})
  }

  render() {
    if (!isPosted) {
      return (
        <View style={styles.container}>
          <Image
            style = {{ width: 300, height: 300, resizeMode: 'contain' }}
            source = {{ uri: 'http://carolinaprospectsbaseball.com/wp-content/uploads/2018/05/Holy-City-Classic-logo.jpg' }}
          />
          <Text style={styles.text}>The 2019 Holy City Classic Schedule will be posted on .... We look forward to seeing you all there!</Text>
        </View>
      );
    } else {
      return (
        <View sytle={styles.container}>
          <View flexDirection='row'>
            <Text>Game</Text>
            <Text>Time</Text>
            <Text>Home</Text>
            <Text>Away</Text>
            <Text>Field</Text>
          </View>
          <FlatList
            renderItem = {({item}) => <Game {...item} />}
            data = {this.state.games}
            keyExtractor = {(item, index) => index}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,

  },

  text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
