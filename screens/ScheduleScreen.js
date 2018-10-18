import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Game from '../components/Game'
import { fetchGames } from '../api/scheduleApi'

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
    // if (Date.now() > games['scheduleDate']) {
      this.setState({isPosted: true})
      this.getGames()
    // }
      console.log(this.state.games)
  }

  getGames = async () => {
    const results = await fetchGames()
    this.setState({games: results})
  }

  render() {
    if (!this.state.isPosted) {
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
          <View flexDirection='row' style={{ paddingTop: 0, justifyContent: 'center', backgroundColor: '#f4e542', }}>
            <Text style={[styles.schedule, {width: '12%'}]}>Game</Text>
            <Text style={[styles.schedule, {width: '12%'}]}>Time</Text>
            <Text style={[styles.schedule, {width: '28%'}]}>Home</Text>
            <Text style={[styles.schedule, {width: '28%'}]}>Away</Text>
            <Text style={[styles.schedule, {width: '15%'}]}>Field</Text>
          </View>
          <FlatList
            renderItem = {({item}) => <Game {...item} />}
            data = {this.state.games}
            keyExtractor = {(item, index) => index.toString()}
            style = {{marginBottom: 45,}}
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
    // paddingLeft: 20,
    // paddingRight: 20,
  },

  text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  schedule: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  }
});
