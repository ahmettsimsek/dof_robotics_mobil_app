import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Innovation_data from '../../components/CardScreenTypes/Card6/Innovation_data.json'
import Card6 from '../../components/CardScreenTypes/Card6/Card6'
import { useNavigation } from '@react-navigation/native'

const InnovationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.textContainer}>Innovation</Text>

        <FlatList
        keyExtractor={item => item.u_id.toString()}
        data = {Innovation_data}
        renderItem = {({item}) => (
          <TouchableOpacity
            onPress={ () => {
              if(item.title === 'AGV'){
                navigation.navigate('AGV', {veri6Gonder: item})
              }
            }}
          >
            <Card6 events6={item}/>

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

export default InnovationScreen