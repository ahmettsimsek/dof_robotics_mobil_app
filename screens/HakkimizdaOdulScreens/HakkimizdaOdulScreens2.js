import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>IAAPA Brass Ring Award</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/5FS9qDzrZD2GXpul9WCv4QXWer5lWMLtGj8Y29bp.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Nov 24, 2022</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>IAAPA Brass Ring Award</Text>
      </View>

       <Text style={styles.textView3}>
       A dream come to pass... 
       </Text>

       <Text style={styles.textView3}>
       It is a privilege for DOF to receive IAAPA Brass Ring award, we are deeply honored by the superiors for this recognition. 
       </Text>

       <Text style={styles.textView3}>
       This never-before-seen Digital Park Concept experience will enable the induvial to step inside the space.
       </Text>

       <Text style={styles.textView3}>
       That takes us up to the latest innovation, The Mission Space Digital Theme Park concept, which is a culmination of the expertise and experience that DOF has gained in the development of its previous products. It features engineering excellence, versatility, robustness in terms of storytelling, and a multiplatform format that affords an immersive dive into the narrative.
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

export default HakkimizdaOdulScreens2;


