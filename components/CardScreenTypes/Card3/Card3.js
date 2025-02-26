import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card3.style'

const Card3 = ({events3}) => { //eğer ki {event3} şeklinde yazmassan veri gitmez örn resim ve yazı gitmez
  return (
    <View style = {styles.container}>
        <Image style =  {styles.image} source = {{ uri: events3.imageUrl}}/>
        <View style = {styles.inner_container}>
            <Text style = {styles.title}>{events3.title}</Text>
            <Text style = {styles.author}>{events3.author}</Text>
        </View>
    </View>
  )
}

export default Card3