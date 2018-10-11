import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MapView } from 'expo';

export default class Maps extends React.Component{
  render() {
    return (
      <MapView
        style = {styles.container}
        provider = {Expo.MapView.PROVIDER_GOOGLE}
        initialRegion = {{
          latitude: 32.925,
          longitude: -79.975,
          latitudeDelta: 0.0922 * 3.5,
          longitudeDelta: 0.0421 * 3.5,
        }}
      >
        <MapView.Marker
          coordinate = {{latitude: 32.7958, longitude: -79.9019}}
          pinColor = '#99badd'
          title = 'College of Charleston'
          description = "Baseball Stadium at Patriot's Point"
        />
        <MapView.Marker
          coordinate = {{latitude: 32.9782, longitude: -80.0678}}
          pinColor = '#99badd'
          title = 'Charleston Southern University'
          description = 'Buccaneer Field'
        />
        <MapView.Marker
          coordinate = {{latitude: 33.0238, longitude: -80.0341}}
          pinColor = '#99badd'
          title = 'Dennis Park'
          description = '355 Anita Dr, Goose Creek'
        />
      </MapView>
    )
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
