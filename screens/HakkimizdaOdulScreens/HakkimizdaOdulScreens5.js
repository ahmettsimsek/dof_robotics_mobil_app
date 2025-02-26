import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens5 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>Mission Space new Digital Park</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/oZ2V5r3KXaMYzsQ15lqv5b62UORLcfBEkk41jbZ8.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Nov 3, 2021</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>Mission Space new Digital Park</Text>
      </View>


       <Text style={styles.textView3}>
       We are thrilled to announce that DOF Robotics is developing Mission Space by streching the bounds of imagination. This never-before-seen Digital Park Concept experience will enable the indivuals to step inside the space.
      </Text>


       <Text style={styles.textView3}>
       Each visitor will wear astronaut suit and helmet to fulfil the space mission. During the mission, they will experience 8 different areas which are specially designed in harmony to give them a different space experience.
       </Text>

       <Text style={styles.textView3}>
       This digital park has been created for everyone over the age of 4 to experience. At the end of the 30-40 minute experience, visitors will gain valuable information as well as having a unique experience about space. They will also have the opportunity to compete with interactive games.
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

export default HakkimizdaOdulScreens5;



