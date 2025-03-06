import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default function Contact() {
  // 1. Konum (İstanbul) koordinatları
  const region1 = {
    latitude: 40.980168,
    longitude: 28.822950,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // 2. Konum (Crowley, TX) koordinatları
  // 3900 Williamson Rd, Crowley, TX 76036
  const region2 = {
    latitude: 32.540609,   // Crowley, TX için enlem
    longitude: -97.380433, // Crowley, TX için boylam
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // 3. Konum (Hoofddorp, Hollanda) koordinatları
  const region3 = {
    latitude: 52.3035,
    longitude: 4.6917,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>İletişim</Text>
      <ScrollView style={{ flex: 1 }}>

        {/* 1. Harita (İstanbul) */}
        <MapView style={styles.map} initialRegion={region1}>
          <Marker
            coordinate={{ latitude: region1.latitude, longitude: region1.longitude }}
            title="DOF Robotics"
            description="Birinci konum"
          />
        </MapView>

        {/* İlk lokasyon bilgileri */}
        <View style={styles.container2}>
          <View style={styles.column}>
            <Ionicons name="location-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Merkez Ofis</Text>
            <Text style={styles.subText}>
              İstanbul İhtisas Serbest Bölgesi, Yeşilköy SB Mah.
              {'\n'}Havalimanı Cd. No:11 Blok,
              {'\n'}34000 Bakırköy/İstanbul
            </Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="call-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Telefon</Text>
            <Text style={styles.subText}>+90 212 800 0003</Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="mail-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.subText}>sales@dofrobotics.com</Text>
          </View>
        </View>

        {/* 2. Harita (Crowley, TX) */}
        <MapView style={styles.map} initialRegion={region2}>
          <Marker
            coordinate={{ latitude: region2.latitude, longitude: region2.longitude }}
            title="DOF Robotics"
            description="NA Headquarter"
          />
        </MapView>

        

        {/* İkinci lokasyon bilgileri */}
        <View style={styles.container2}>
          <View style={styles.column}>
            <Ionicons name="location-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>NA Headquarter</Text>
            <Text style={styles.subText}>
              TX Office and Showroom: 3900 Williamson Road,
              {'\n'}Crowley, TX 76036 USA
            </Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="call-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Telefon</Text>
            <Text style={styles.subText}>+90 212 801 0003</Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="mail-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.subText}>sales@dofrobotics.com</Text>
          </View>
        </View>

        {/* 3. Harita (Hoofddorp, Hollanda) */}
        <MapView style={styles.map} initialRegion={region3}>
          <Marker
            coordinate={{ latitude: region3.latitude, longitude: region3.longitude }}
            title="DOF Robotics"
            description="Ofis"
          />
        </MapView>

        {/* Üçüncü lokasyon bilgileri */}
        <View style={styles.container2}>
          <View style={styles.column}>
            <Ionicons name="location-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Merkez Ofis</Text>
            <Text style={styles.subText}>
              Jacobus Spijkerdreef 394, 2132 PZ Hoofddorp
            </Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="call-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Telefon</Text>
            <Text style={styles.subText}>+90 212 801 0003</Text>
          </View>

          <View style={styles.column}>
            <Ionicons name="mail-outline" size={36} style={styles.icon} />
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.subText}>sales@dofrobotics.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 25,
    paddingTop: 20,
    fontSize: 22,
    backgroundColor: '#dcdcdc',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#708090',
  },
  column: {
    width: '30%',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    marginBottom: 8,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: 'tomato',
    textAlign: 'center',
  },
  map: {
    width: width,
    height: 300,
    marginBottom: 20,
    marginTop: 20
  },
});
