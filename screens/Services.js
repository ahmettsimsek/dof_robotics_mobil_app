import { View, Text, FlatList, SafeAreaView, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity   } from 'react-native'
import React, { useEffect, useRef } from 'react'
import news_data from '../components/CardScreenTypes/EventsCard/news_data.json' //isim-resim-açıklama tutan data
import NewsCard from '../components/CardScreenTypes/EventsCard'
import news_banner_data from '../components/CardScreenTypes/EventsCard/news_banner_data.json' // bu sayfamızın üst kısmında bulunan yatay kaydırdığımız görsel listesini bulunduran data
import { useNavigation } from '@react-navigation/native'


function Services()  {
  const navigation = useNavigation(); // Navigasyon nesnesini al
  const flatListRef = useRef(null);
  let scrollIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex++;
      if (scrollIndex >= news_banner_data.length) {
        scrollIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: scrollIndex, animated: true });
    }, 2500); // Her 2.5 saniyede bir kaydır

    return () => clearInterval(interval);
  }, []);
  

  return (
    <SafeAreaView style = {styles.container}>
      
        
        <FlatList
   
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Title değerini kontrol et ve yönlendirme yap
              if (item.title === 'Entertainment') {
                navigation.navigate('Entertainment', { event: item });

              } else if (item.title === 'Flat Movies') {
                navigation.navigate('FlatMovies', { event: item });

              } else if (item.title === 'VR Movies') {
                navigation.navigate('VRMovies', { event: item });

              } else if (item.title === 'Dome Movies') {
                navigation.navigate('DomeMovies', { event: item });

              } else if (item.title === 'Innovation') {
                navigation.navigate('Innovation', { event: item });
              }
            }}
          >
            <NewsCard events={item} />
          </TouchableOpacity>
        )}

        ListFooterComponent={() => (
          
          <View style={styles.dofContainer}>
            <Text style={styles.dofHeader}>DOF Products</Text>

           {/* Otomatik kayan FlatList */}
            <FlatList
              ref={flatListRef}
              data={news_banner_data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.productContainer}>
                  <Image
                    style={styles.dofImage}
                    source={{ uri: item.imageUrl }}
                  />
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productDescription}>{item.description}</Text>
                </View>
              )}
            />

    <View style={styles.arrowContainer}>
      <Text style={styles.arrowText}>→</Text>
    </View>

    <View style={styles.arrowContainer2}>
      <Text style={styles.arrowText}>←</Text>
    </View>
          </View>

          
        )}
        />

    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecef1'
  },
  banner_image: {
    height: Dimensions.get('window').height /5,
    width: Dimensions.get('window').width /2,
  },

  dofContainer: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  dofHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333'
  },
  productContainer: {
    width: Dimensions.get('window').width / 2.2,
    alignItems: 'center',
    marginHorizontal: 5, // Resimler arasında boşluk
  },
  dofImage: {
    height: Dimensions.get('window').height / 5,
    width: '100%',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    textAlign: 'center'
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginTop: 15,
  },
  arrowContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: 'rgba(182, 163, 163, 0.55)',
    padding: 10,
    borderRadius: 20,
  },
  arrowText: {
    fontWeight: 'bold',
  },
  arrowContainer2: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: 'rgba(182, 163, 163, 0.55)',
    padding: 10,
    borderRadius: 20,
  }

  
})

export default Services