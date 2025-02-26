import { View, Text, SafeAreaView,  TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import DomeMovies_data from '../../components/CardScreenTypes/Card5/DomeMovies_data.json'
import Card5 from '../../components/CardScreenTypes/Card5/Card5';


function DomeMoviesScreen  () {
  const navigation = useNavigation();

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.textContainer}>Dome Movies</Text>

      <FlatList
        keyExtractor={item => item.u_id.toString()}
        data = {DomeMovies_data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              if(item.title === 'Africa'){
                navigation.navigate('Africa', {gonder5Veri: item})
              }
              else if(item.title === 'Island Coaster'){
                navigation.navigate('IslandCoasterDome', {gonder5Veri: item})
              }
              else if(item.title === 'Meet'){
                navigation.navigate('MeetDome', {gonder5Veri: item})
              }
              else if(item.title === 'Mission Mars'){
                navigation.navigate('MissionMarsDome', {gonder5Veri: item})
              }
              else if(item.title === 'Wall of China'){
                navigation.navigate('WallofChinaDome', {gonder5Veri: item})
              }
              else if(item.title === 'Follow'){
                navigation.navigate('FollowDome', {gonder5Veri: item})
              }
              else if(item.title === 'Escape'){
                navigation.navigate('EscapeDome', {gonder5Veri: item})
              }
             
            }}
          >
            <Card5 events5={item}/>

          </TouchableOpacity>
        )}
      
      
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecef1f',
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

export default DomeMoviesScreen