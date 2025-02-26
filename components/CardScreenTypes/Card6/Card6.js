import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card6.style'

const Card6 = ({events6}) => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.image} source={{uri: events6.imageUrl}}/>
        <View style = {styles.inner_container}>
             <Text style = {styles.title}>{events6.title}</Text>
             <Text style = {styles.description}>{events6.description}</Text>
             <Text style = {styles.author}>{events6.author}</Text>
        </View>
    </View>
  )
}

export default Card6