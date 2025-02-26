import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin:10,
        borderRadius:10
    
    },
    image: {
        height: Dimensions.get('window').height/1.5,
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        borderWidth: 2
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 7
    },
    description: {
        marginTop: 3,
        
    },
    inner_container: {
        padding: 5,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: '400',
        color: 'gray'
    
    },
    
})