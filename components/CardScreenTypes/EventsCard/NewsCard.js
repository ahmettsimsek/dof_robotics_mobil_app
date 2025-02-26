import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './NewsCard.style'

const NewsCard = ({events}) => {
  return (
    
    <View style = {styles.container}>
      <Image style={styles.image} source={{uri: events.imageUrl}}/>
      <View style = {styles.inner_container}>
        <Text style = { styles.title}>{events.title}</Text>
        <Text style = { styles.author}>{events.author}</Text>
      </View>
    </View>
  )
}

export default NewsCard;