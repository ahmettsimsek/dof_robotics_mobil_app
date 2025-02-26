import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens8 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>DOF Robotics wins Attraction Star Award for latest interactive VR game</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/dOgSIs0jaQV8og7r8dHv5NEczxhD1UM8JEAt9N6J.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Feb 13, 2021</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>DOF Robotics wins Attraction Star Award for latest interactive VR game</Text>
      </View>


       <Text style={styles.textView3}>
       DOF Robotics is pleased to announce that it has won an Attraction Star award for its latest innovation, DEFENDER: Light of Hope. This interactive VR game challenges up to four players to work together in order to protect their territory from aliens. Thanks to the VR headsets, firing guns and flexible DOF (degrees of freedom) motion, players are fully immersed in the action.
      </Text>

      <Text style={styles.textView4}>
      Attraction Star Award winner
      </Text>


       <Text style={styles.textView3}>
       The awards ceremony took place during the ATRAX show on 14 February 2020. ATRAX is the leading trade show in Turkey for the entertainment, park and recreation sector. DEFENDER: Light of Hope is the latest in the company’s range of cutting edge attractions, and DOF is proud to have produced another well-received game. Released in 2019, this interactive game changes the way visitors play, putting them at the heart of the action.
       </Text>

       <Text style={styles.textView3}>
       “We are pleased that our new attraction Defender has won this valuable award,” says Bakit Baydaliev, CEO of DOF Robotics. “This award acknowledges our expertise and hard work to deliver the best VR amusements attractions to the world and this is only the start. 2020 will mark the launch of new DOF immersive attractions.”
       </Text>

       <Text style={styles.textView3}>
       DEFENDER: Light of Hope is ideal for several different kinds of entertainment venues, for example, shopping malls, FECs and theme parks.
       </Text>

       <Text style={styles.textView3}>
       The company first unveiled DEFENDER: Light of Hope at IAAPA Expo in Orlando last year, where it was also a platinum sponsor of the event. DOF Robotics also attended IAAPA Expo Europe earlier in 2019, where it showcased several products, including the multi-award-winning Hurricane 360 VR experience as well as the bestselling RIOT VR. Hurricane 360 VR has been wowing shoppers at a new VR retailtainment project in Portugal.
       </Text>

       </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 6,
    paddingTop: 40,
    fontSize: 22,
    backgroundColor: '#dcdcdc',
  },
  container2: {
     // Ekranın tamamını kaplayacak
    justifyContent: 'center', // Dikeyde ortalama
    alignItems: 'center', // Yatayda ortalama
    marginTop: 55
  },
  image: {
    height: Dimensions.get('screen').height / 4.35,
    width: Dimensions.get('screen').width / 1.1,
    borderRadius: 10, // Köşeleri hafif yuvarlatır
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
    justifyContent: 'center',
    color: 'gray'
  },
  text2: {
    fontSize: 22,
    fontWeight: '900',
    justifyContent: 'center'
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
  },
  textView2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12
  },
  textView3: {
    fontWeight: '400',
    margin: 3,
    textAlign: 'center',
  },
  textView4: {
    fontWeight: '800',
    margin: 10,
    textAlign: 'center',
    marginBottom: 2
  },
  textView5: {
    fontWeight: '400',
    margin: 1,
    textAlign: 'center',

  }
});

export default HakkimizdaOdulScreens8;

