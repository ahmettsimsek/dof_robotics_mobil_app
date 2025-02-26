import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens6 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>Most anticipated IP-based dynamic VR simulator Monster Jam...</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/vrpDET0TeXYG7uzn1IfxWmwu1ANH3bRb0ewLtORp.webp'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Oct 14, 2021</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>Most anticipated IP-based dynamic VR simulator Monster Jam ™ Grave Digger ™ monster truck as developed by DOF  Robotics</Text>
      </View>


       <Text style={styles.textView3}>
       DOF Robotics and Feld Entertainment are excited to announce the debut of the new, dynamic Monster Jam ™ Grave Digger ™ monster truck VR simulator. 
      </Text>


       <Text style={styles.textView3}>
       For the first time ever, now your customers can experience the thrill of driving one of the most famous monster trucks in the world—Grave Digger!  The simulator offers a range of movement on a 6-axis platform featuring pitch, roll and yaw movements.  The realistic motion combined with exciting video delivered through VR headsets coupled with strong wind effects make this and unforgettable ride. 
       </Text>

       <Text style={styles.textView3}>
       The DOF stand-alone attraction is perfect for all types of entertainment venues such as FECs, theme parks and shopping centers. 
       </Text>

       <Text style={styles.textView3}>
       The global leader in monster truck motorsports, Monster Jam provides full-throttle family fun for millions of fans around the world each year where they push all limits in Freestyle, Skills and Racing competitions.  The legendary Grave Digger monster truck celebrates 40 years as the black and green wrecking machine in 2022.
       </Text>

       <Text style={styles.textView3}>
       © Feld Motor Sports, Inc.  All Rights Reserved.  
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
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width / 1.35,
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

export default HakkimizdaOdulScreens6;


