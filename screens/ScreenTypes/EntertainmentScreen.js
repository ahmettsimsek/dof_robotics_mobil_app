import {  Text,SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import entertainment_data from '../../components/CardScreenTypes/Card2/entertainment_data.json';
import Card2 from '../../components/CardScreenTypes/Card2/Card2';
import { useNavigation } from '@react-navigation/native';

function EntertainmentScreen() {
   const navigation = useNavigation(); // Navigasyon nesnesini al
   
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textContainer}> Entertainment</Text>
        <FlatList
          keyExtractor={item => item.u_id.toString()}
          data={entertainment_data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {

                if(item.title === "Mission Space Digital Park"){
                  navigation.navigate('SpaceDigitalPark', {veriGonder: item})

                } else if(item.title === "Nautilus"){
                  navigation.navigate('Nautilus', {veriGonder: item})

                }else if(item.title === "Monster Jam"){
                  navigation.navigate('MonsterJam', {veriGonder: item})

                }else if(item.title === "Hurricane"){
                  navigation.navigate('Hurricane', {veriGonder: item})

                }else if(item.title === "Supernova"){
                  navigation.navigate('Supernova', {veriGonder: item})

                }else if(item.title === "Defender"){
                  navigation.navigate('Defender', {veriGonder: item})

                }else if(item.title === "Flying Theataer L"){
                  navigation.navigate('FlyingL', {veriGonder: item})

                }else if(item.title === "Flying Theataer M"){
                  navigation.navigate('FlyingM', {veriGonder: item})

                }else if(item.title === "XD Theater"){
                  navigation.navigate('XdTheater', {veriGonder: item})

                }else if(item.title === "Riot"){
                  navigation.navigate('Riot', {veriGonder: item})

                }else if(item.title === "Riot 360"){
                  navigation.navigate('Riot360', {veriGonder: item})

                }else if(item.title === "Atlantis"){
                  navigation.navigate('Atlantis', {veriGonder: item})

                }else if(item.title === "Dark Ride"){
                  navigation.navigate('DarkRide', {veriGonder: item})
                }
                
              }}
            >
              <Card2 events2={item} />
            </TouchableOpacity>
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecef1f', // Renk kodu düzeltildi
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 900,
    padding: 5,
    paddingTop: 40,
    fontSize: 22
  }
});

export default EntertainmentScreen;
