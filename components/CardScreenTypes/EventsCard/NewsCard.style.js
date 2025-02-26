import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin:12,
        borderRadius:10
    
    },
    image: {
        height: Dimensions.get('window').height/3.5,
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        borderWidth: 4
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5
    },  
    inner_container: {
        padding: 4,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: '400',
        color: 'gray'
    
    },
    
})