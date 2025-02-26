import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}> Blooloop Public Vote Award</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/VLe2OslMEbN19o4PBQNZhSbrpDCy4KIhz5Lb0KgN.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Dec 15, 2022</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>Blooloop Public Vote Award</Text>
      </View>

       <Text style={styles.textView3}>
        We can’t be more excited to announce that Digital Park: Mission Space has won the Public Vote Award at Blooloop Innovation Festival. UK-based Blooloop provides the entertainment industry's world-leading coverage for entertainment professionals. 
       </Text>

       <Text style={styles.textView3}>
        Having received Brass Ring Best New Product at IAAPA Expo 2022 last month, we are extremely honored by such prestigious awards.
       </Text>

       <Text style={styles.textView3}>
        This never-before-seen Digital Park Concept experience will enable the individual to step inside the space and stage, simulator or team numbers can be scalable as per project need.
       </Text>

    </SafeAreaView>
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
    margin: 10,
    textAlign: 'center',
  }
});

export default HakkimizdaOdulScreens1;
