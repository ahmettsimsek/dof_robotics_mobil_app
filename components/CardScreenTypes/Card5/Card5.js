import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card5.style'

const Card5 = ({events5}) => {
    
  return (
    <View style = {styles.container}>
        <Image style = {styles.image} source ={{uri: events5.imageUrl}}/>
        <View style = {styles.inner_container}>
            <Text style = {styles.title}>{events5.title}</Text>
            <Text style = {styles.author}>{events5.author}</Text>
        </View>
    </View>
  )
}

export default Card5