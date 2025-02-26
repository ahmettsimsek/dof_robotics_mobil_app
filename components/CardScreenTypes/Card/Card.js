import react from "react";
import { View,Text, TouchableOpacity } from 'react-native';
import styles from './Card.style'

const Card =(props) => {
    return(
        <View style = {styles.container}>

          
          <View style = {styles.body}>
            <Text style = {styles.text}>{props.title}</Text>
            <Text style = {styles.title}>{props.text}</Text>
          </View>
          <TouchableOpacity style = {styles.button_container}>
            <Text style = {styles.button_title}>İNCELE</Text>
          </TouchableOpacity>
        </View>
    )
}



export default Card;