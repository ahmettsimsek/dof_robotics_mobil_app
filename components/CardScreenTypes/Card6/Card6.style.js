import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin:10,
        borderRadius:10
    
    },
    image: {
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 2
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 4
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