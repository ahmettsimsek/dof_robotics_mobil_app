import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';


export default function Support() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>ROI</Text>
      <ScrollView>
        <Image
          source={{uri: "https://old.dofrobotics.com/img/home/iMac.png"}}
          style = {styles.resim}
        />
        <View style ={ styles.yazi1} >
        <Text style ={ styles.yazi} >Earn with us</Text>
        </View>

        <View  style ={ styles.yazi1}>
        <Text style ={ styles.yazi2} >Return on investment</Text>
        </View>

        <View  style ={ styles.yazi1}>
        <Text style ={ styles.yazi3} >DOF provides various types of 
          Entertainment simulators that you can earn money with it. 
          Fill the form below and start calculating your estimated
           return of investment.
        </Text>
        </View>

        
      </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resim:{
    width: 450,
    height: 450,
    marginTop: 15
  },
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
  yazi: {
    fontSize: 40
  },
  yazi2: {
    fontSize: 25
  },
  yazi3: {
    fontSize: 15
  },
  yazi1: {
    justifyContent: 'center',
    alignItems: 'center'
  }
 
});
