import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation'

import {Constants} from 'expo'
import { Ionicons } from '@expo/vector-icons'

import ScheduleScreen from './screens/ScheduleScreen'
import FieldsScreen from './screens/FieldsScreen'
import HotelsScreen from './screens/HotelsScreen'
import TwitterFeedScreen from './screens/TwitterFeedScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import LoginScreen from './screens/LoginScreen'
import AdminScreen from './screens/AdminScreen'
import SetUpScreen from './screens/SetUpScreen'
import UpdateScreen from './screens/UpdateScreen'

export default class App extends React.Component {
  render() {
    return(
      <AppNavigator />
    );
  }
}

const AdminStack = createStackNavigator(
  {
    'Admin Login': LoginScreen,
    AdminHome: AdminScreen,
    SetUp: SetUpScreen,
    Update: UpdateScreen,
  },
  {
    initialRouteName: 'Admin Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)


const MainTabs = createBottomTabNavigator(
  {
    Fields: FieldsScreen,
    Hotels: HotelsScreen,
    Schedule: ScheduleScreen,
    Twitter: TwitterFeedScreen,
    Notifications: NotificationsScreen,
  },
  {
    initialRouteName: 'Schedule',
    tabBarOptions: {
      style: {
        backgroundColor: '#99badd',
        paddingTop: 10,
        paddingBottom: 5,
        paddingRight: 10,
      },
      labelStyle: {
        color: 'white',
      },
    },
  },
)

const MainDrawer = createDrawerNavigator(
  {
    'Holy City Classic': MainTabs,
    Admin: AdminStack,
  },
)

MainTabs.navigationOptions = ({navigation}) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const options = {
    contentOptions: {
      drawerBackgroundColor: '#f4e542',
    },
    headerTitle: routeName,
    headerStyle: {
      backgroundColor: '#99badd',
      paddingTop: Constants.statusBarHeight,
    },
    headerTitleStyle: {
      color: 'white',
      paddingLeft: 20,
    },
    headerRight:
      <Ionicons
        name = {'md-menu'}
        size = {30}
        color = 'white'
        onPress = {() => {navigation.toggleDrawer(); }}
        style = {{paddingRight: 20,}}
      />,
  }
  return options;
}

MainDrawer.navigationOptions = ({navigation}) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const options = {
    drawerBackgroundColor: '#f4e542',
    headerTitle: routeName,
    headerStyle: {
      backgroundColor: '#99badd',
      paddingTop: Constants.statusBarHeight,
    },
    headerTitleStyle: {
      color: 'white',
      paddingLeft: 20,
    },
    headerRight:
      <Ionicons
        name = {'md-menu'}
        size = {30}
        color = 'white'
        onPress = {() => {navigation.toggleDrawer(); }}
        style = {{paddingRight: 20,}}
      />,
  }
  return options;
}

const AppNavigator = createStackNavigator(
  {
    Drawer: MainDrawer,
  }
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
