import { Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Card3 from '../../components/CardScreenTypes/Card3/Card3'
import flatMovies_data from '../../components/CardScreenTypes/Card3/flatMovies_data.json'
import { useNavigation } from '@react-navigation/native';

function FlatMoviesScreen () {
   const navigation = useNavigation(); // Navigasyon nesnesini almayı unutursan data verileri gelmez!!!!

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.textContainer}> Flat Movies</Text>

      <FlatList
        keyExtractor={item => item.u_id.toString()}
        data={flatMovies_data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress = {() => {
              if(item.title === "Aerobatics"){
                navigation.navigate('Aerobatics', {veriGonder2: item})
              } 
              
              else if(item.title === "Astro Cops "){
                navigation.navigate('AstroCops', {veriGonder2:item})
              }

              else if(item.title === "Cappadocia Coaster "){
                navigation.navigate('CappadociaCoaster', {veriGonder2:item})
              }
              
              else if(item.title === "Dino Island"){
                navigation.navigate('DinoIsland', {veriGonder2:item})
              }
              
              else if(item.title === "Future Bike"){
                navigation.navigate('FutureBike', {veriGonder2:item})
              }
              
              else if(item.title === "Hot Pursuit 1"){
                navigation.navigate('HotPursie1', {veriGonder2:item})
              }
              
              else if(item.title === "Hot Pursuit 2"){
                navigation.navigate('HotPursie2', {veriGonder2:item})
              }
              
              else if(item.title === "Human Body"){
                navigation.navigate('HumanBody', {veriGonder2:item})
              }
              
              else if(item.title === "Ice World"){
                navigation.navigate('IceWorld', {veriGonder2:item})
              }
              
              else if(item.title === "Island Coaster "){
                navigation.navigate('IslandCoaster', {veriGonder2:item})
              }
              
              else if(item.title === "Lost World"){
                navigation.navigate('LostWorld', {veriGonder2:item})
              }
              
              else if(item.title === "Magic World"){
                navigation.navigate('MagicWorld', {veriGonder2:item})
              }

              else if(item.title === "Penguins"){
                navigation.navigate('Penguins', {veriGonder2:item})
              }

              else if(item.title === "Redline"){
                navigation.navigate('RedLine', {veriGonder2:item})
              }

              else if(item.title === "Space Race"){
                navigation.navigate('SpaceRace', {veriGonder2:item})
              }

              else if(item.title === "Uludağ Snowboard"){
                navigation.navigate('UludagSnowboard', {veriGonder2:item})
              }

              else if(item.title === "Wall of China "){
                navigation.navigate('WalloFChina', {veriGonder2:item})
              }
              
     
            }}
          >

            <Card3 events3 = {item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Renk kodu düzeltildi
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

export default FlatMoviesScreen