import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card2.style'

const Card2 = ({events2}) => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.image} source = {{ uri: events2.imageUrl}}/>
        <View style = {styles.inner_container}>
             <Text style={styles.title}>{events2.title}</Text>
             <Text style={styles.description}>{events2.description}</Text>
             <Text style={styles.author}>{events2.author}</Text>
        </View>
    </View>
  )
}

export default Card2