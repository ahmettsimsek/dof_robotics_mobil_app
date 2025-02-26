import {  Text,SafeAreaView, TouchableOpacity, StyleSheet,FlatList  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card4 from '../../components/CardScreenTypes/Card4/Card4';
import VrMovies_data from '../../components/CardScreenTypes/Card4/VrMovies_data.json'

function VRmoviesScreen () {
  const navigation = useNavigation();

  return (
   <SafeAreaView style = {styles.container}>
    <Text style = {styles.textContainer}>VR Movies</Text>

    <FlatList
      keyExtractor={item => item.u_id.toString()}
      data = {VrMovies_data}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            if(item.title === 'Aladdin'){
              navigation.navigate('Aladdin', {veriGonder3: item})
            } 
            else if (item.title === 'Arabian Nights'){
              navigation.navigate('ArabianNights', {veriGonder3: item})
            }
            else if (item.title === 'Aztec'){
              navigation.navigate('Aztec', {veriGonder3: item})
            }
            else if (item.title === 'Cosmic Fighters'){
              navigation.navigate('CosmicFighters', {veriGonder3: item})
            }
            else if (item.title === 'Dino Coaster'){
              navigation.navigate('DinoCoaster', {veriGonder3: item})
            }
            else if (item.title === 'Dystopia'){
              navigation.navigate('Dystopia', {veriGonder3: item})
            }
            else if (item.title === 'Escape'){
              navigation.navigate('Escape', {veriGonder3: item})
            }
            else if (item.title === 'Fly Bike'){
              navigation.navigate('FlyBike', {veriGonder3: item})
            }
            else if (item.title === 'Follow'){
              navigation.navigate('Follow', {veriGonder3: item})
            }
            else if (item.title === 'Inferno'){
              navigation.navigate('Inferno', {veriGonder3: item})
            }
            else if (item.title === 'Island Coaster'){
              navigation.navigate('IslandCoasterVR', {veriGonder3: item})
            }
            else if (item.title === 'Meet'){
              navigation.navigate('Meet', {veriGonder3: item})
            }
            else if (item.title === 'Mission Mars'){
              navigation.navigate('MissionMars', {veriGonder3: item})
            }
            else if (item.title === 'Motoride 1'){
              navigation.navigate('Motoride1', {veriGonder3: item})
            }
            else if (item.title === 'Motoride 2'){
              navigation.navigate('Motoride2', {veriGonder3: item})
            }
            else if (item.title === 'Nigthwish'){
              navigation.navigate('Nigthwish', {veriGonder3: item})
            }
            else if (item.title === 'Peterpan'){
              navigation.navigate('Peterpan', {veriGonder3: item})
            }
            else if (item.title === 'Pinocchio'){
              navigation.navigate('Pinocchio', {veriGonder3: item})
            }
            else if (item.title === 'Planet'){
              navigation.navigate('Planet', {veriGonder3: item})
            }
            else if (item.title === 'Wall of China'){
              navigation.navigate('WalloFChinaVR', {veriGonder3: item})
            }
             else if (item.title === 'Wasteland'){
              navigation.navigate('Wasteland', {veriGonder3: item})
            }

          }}
        >
          <Card4 events4 = {item}/>
        </TouchableOpacity>
      )}
    />
   </SafeAreaView>
  )
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
})

export default VRmoviesScreen