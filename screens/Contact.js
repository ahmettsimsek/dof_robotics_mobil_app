import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const countryMarkers = [
  { id: 1, title: "Türkiye", latitude: 39.9334, longitude: 32.8597 },
  { id: 2, title: "Almanya", latitude: 51.1657, longitude: 10.4515 },
  { id: 3, title: "Fransa", latitude: 48.8566, longitude: 2.3522 },
  { id: 4, title: "İtalya", latitude: 41.9028, longitude: 12.4964 },
  { id: 5, title: "İngiltere", latitude: 51.5074, longitude: -0.1278 }
];

export default function Contact() {
    return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 48.8566, // Başlangıç noktası (Fransa)
              longitude: 2.3522,
              latitudeDelta: 20,
              longitudeDelta: 20,
            }}
          >
            {countryMarkers.map((country) => (
              <Marker
                key={country.id}
                coordinate={{ latitude: country.latitude, longitude: country.longitude }}
                title={country.title}
              />
            ))}
          </MapView>
        </View>
      );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });