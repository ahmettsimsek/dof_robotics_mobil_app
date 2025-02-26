import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card4.style'

const Card4 = ({events4}) => {
  return (
    <View style = { styles.container}>
      <Image style = {styles.image} source = {{ uri: events4.imageUrl}}/>
      <View style = {styles.inner_container}>
        <Text style = {styles.title}>{events4.title}</Text>
        <Text style = {styles.author}>{events4.author}</Text>
        
      </View>
    </View>
  )
}

export default Card4