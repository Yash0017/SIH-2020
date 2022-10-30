import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 
export default class Map extends Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 19.0760,
            longitude: 72.8777,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
    
        >

          <Marker
           draggable
            coordinate={{
              latitude: 19.0760,
              longitude: 72.8777,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a test marker for provided location.'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    flex: 0.8,
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    flex: 0.8,
  },
});