import { View, Text, SafeAreaView, StyleSheet,  TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function FlyBikeScreen  () {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Fly Bike</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://dofrobotics.com/storage/movies/8CQLahkCajbT8hSbcXFPp9NeIW4VrhKehDKZDnHM.jpg' }}
          style={styles.image}
        />

        <Text style={styles.textContainer2}>Fly Bike</Text>
        <Text style={styles.textContainer3}>VR</Text>

        <TouchableOpacity
         style={styles.button} 
         onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>İletişim</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
    padding: 15,
    paddingTop: 40,
    fontSize: 22,
    backgroundColor: '#dcdcdc',
  },
  imageContainer: {
    flex: 0.7,
    justifyContent: 'center', // Dikeyde ortala
    alignItems: 'center',     // Yatayda ortala
  },
  image: {
    width: 332,  // Daha iyi görüntülenmesi için genişlik ayarlandı
    height: 460,
    resizeMode: 'cover',  // Görüntünün tamamını kapsaması için
    marginTop: 150,  // Yukarıdan boşluk bırakır
    borderRadius: 20,  // Çerçeveyi yumuşatır
    borderWidth: 4,
    borderColor: 'black',
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 4 }, // Gölge yönü
    shadowOpacity: 0.3, // Gölge opaklığı
    shadowRadius: 5, // Gölgenin yayılma miktarı
    elevation: 20, // Android için gölge
  },
  textContainer2: {
    fontWeight: '900',
    marginTop: 30,
    fontSize: 22,
    textAlign: 'center',
    color: 'black',  
  
  },
  textContainer3: {
    fontWeight: '900',
    marginTop:5,
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',  
  
  },
  button: {
    backgroundColor:'#ff6347',
    padding: 15,
    borderRadius: 16,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default FlyBikeScreen

