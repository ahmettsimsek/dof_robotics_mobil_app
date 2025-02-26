import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Hakkimizda')}
          >
            <Image
              source={{ uri: 'https://dofrobotics.com/img/dof-team-award33.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Hakkımızda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Referanslar')}
          >
            <Image
              source={{ uri: 'https://i.hizliresim.com/g0pvkhm.png' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Referanslarımız</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Ödüller')}
          >
            <Image
              source={{ uri: 'https://play-lh.googleusercontent.com/njXSejloh5Uuk_34itAHwMkR-6Pax0-amG6wke5UX3AlVEp7TTCLsKtsqCXyveAaCQ=w480-h960' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Ödüller</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center', // Dikeyde ortala
    alignItems: 'center', // Yatayda ortala
  },
  scrollView: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center', // Kartları yatayda ortalar
    paddingVertical: 10,
  },
  card: {
    width: 270,  // Kart genişliğini artırdım
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 25,
    overflow: 'hidden',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  touchable: {
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,  // Resim yüksekliğini büyüttüm
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardText: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  }
});
