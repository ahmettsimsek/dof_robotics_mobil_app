import { 
  View, 
  Text, 
  SafeAreaView, 
  FlatList, 
  ScrollView, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Nautilus_banner_data from '../../components/CardScreenSpecial/Nautilus_banner_data.json';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function NautilusScreen () {
  const navigation = useNavigation();

  const flatListRef = useRef(null);
  let scrollIndex = 0;
  let isScrollingRight = true;

  useEffect(() => {
    const interval = setInterval(() => {
      // Sağa kaydırma
      if (isScrollingRight) {
        scrollIndex++;
        if (scrollIndex >= Nautilus_banner_data.length - 1) {
          isScrollingRight = false;
        }
      } 
      // Sola kaydırma
      else {
        scrollIndex--;
        if (scrollIndex <= 0) {
          isScrollingRight = true;
        }
      }
  
      flatListRef.current.scrollToIndex({ index: scrollIndex, animated: true });
    }, 2400); // Her 3 saniyede bir kaydır
  
    return () => clearInterval(interval);
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {styles.textContainer}> Nautilus</Text>
      <FlatList
        data={[]} // Liste verisi yok, header ve footer içeriğini kullanacağız
        keyExtractor={() => 'dummy'} // aşağı-yukarı harket için her şeyi flatlist içine almak için yaptık
        contentContainerStyle={{ flexGrow: 1 }}
        // Üst kısım (header): Başlık ve yatay banner
        ListHeaderComponent={() => (
          <>
           
            <View style={styles.scrollContainer}>
            <FlatList
            ref={flatListRef}
            data={Nautilus_banner_data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                style={styles.banner_image}
                source={{ uri: item.imageUrl }}
              />
              )}
            />
            <View style={styles.arrowContainer}>
              <Text style={styles.arrowText}>→</Text>
            </View>

            <View style={styles.arrowContainer2}>
                  <Text style={styles.arrowText}>←</Text>
                </View>
                  </View>
          </>
        )}


        // Alt kısım (footer): Açıklama metinleri
        ListFooterComponent={() => (
          <>
            <Text style={styles.TEXT1}>
              - Submarine Discover Center(SDC) starting a special mission to unravel the secrets of the hidden deep life. Plunge into the unknown and discover ocean full of hidden treasure. Let's join Nautilus for a thrilling journey  and face your destiny.
            </Text>

            <View style={styles.containerImage}>
              <Image
                source={{ uri: 'https://dofrobotics.com/img/product-icons/doficon2.png' }}
                style={styles.image}
              />
              <Image
                source={{ uri: 'https://dofrobotics.com/img/product-icons/doficon3.png' }}
                style={styles.image}
              />
               <Image
                source={{ uri: 'https://dofrobotics.com/img/product-icons/doficon4.png' }}
                style={styles.image}
              />
              <Image
                source={{ uri: 'https://dofrobotics.com/img/product-icons/doficon5.png' }}
                style={styles.image}
              />
               <Image
                source={{ uri: 'https://dofrobotics.com/img/product-icons/wind.png' }}
                style={styles.image}
              />
            </View>

        
            <Text style={styles.TEXT1}>
              - Nautilus is a newest Submarine Simulator based on 6DOF motion engines. The ride is specially designed to provide a realistic underwater experience. 
              With 12 seats, the new product has a throughput of 72 people per hour and features a 270-degree screen with water effects, to discover the mystery of submarine life.
            </Text>

          
            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="ziBMUXnxkUA"
              />
            </View>

            

           
            
            <View style = {styles.VİEW2}>
              <Text style = {styles.TEXT2}>Benzer</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.buttonContent}>
                <TouchableOpacity
                style = {styles.button}
                onPress={() => navigation.navigate('Defender')}
                >
                  <Image
                    source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/GNmdJIU8KY6UrovggXKKFQ0xfg95oLDWyfM0c9en.webp' }}
                    style={styles.buttonImage}               
                  />
                  <Text style={styles.buttonText}>Entertainment</Text>
                  <Text style={styles.buttonText2}>Defender</Text>
                  
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContent}>
                <TouchableOpacity
                style = {styles.button}
                onPress={() => navigation.navigate('SpaceDigitalPark')}
                >
                  <Image
                    source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/3DNeQYYq54Qoc81hBb7nlL1965dokQd6nip94kPW.webp' }}
                    style={styles.buttonImage}               
                  />
                  <Text style={styles.buttonText}>Entertainment</Text>
                  <Text style={styles.buttonText2}>Mission Space Digital Park</Text>
                  
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContent}>
                <TouchableOpacity
                style = {styles.button}
                onPress={() => navigation.navigate('Atlantis')}
                >
                  <Image
                    source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/0AHZ58TQuPpcHTgB5lQJNdiNQjEmBkk8nItXbntx.webp' }}
                    style={styles.buttonImage}               
                  />
                  <Text style={styles.buttonText}>Entertainment</Text>
                  <Text style={styles.buttonText2}>Atlantis</Text>
                  
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContent}>
                <TouchableOpacity
                style = {styles.button}
                onPress={() => navigation.navigate('XdTheater')}
                >
                  <Image
                    source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/88OCeZcR9new6SXWNgzRytdNtxGw1ZQv2UlSeJWD.webp' }}
                    style={styles.buttonImage}               
                  />
                  <Text style={styles.buttonText}>Entertainment</Text>
                  <Text style={styles.buttonText2}>XD Theater</Text>
                  
                </TouchableOpacity>
              </View>

            </View>  
            </ScrollView> 
          </>
        )}
      />
      
    </SafeAreaView>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 900,
    padding: 6,
    paddingTop: 40,
    fontSize: 22,
    backgroundColor:'#dcdcdc',
  },
  banner_image: {
    height: Dimensions.get('screen').height / 3.4,
    width: Dimensions.get('screen').width / 1, // Genişlik hesaplamasını kontrol edin
    borderTopLeftRadius: 0.5,
    borderTopRightRadius: 0.5,
    borderWidth: 2,
    borderColor: 'black',
  },
  scrollContainer: {
    position: 'relative',
  },
  arrowContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: 'rgba(65, 62, 62, 0.55)',
    padding: 10,
    borderRadius: 20,
  },
  arrowContainer2: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: 'rgba(65, 62, 62, 0.55)',
    padding: 10,
    borderRadius: 20,
  },
  arrowText: {
    fontWeight: 'bold',
  },
  TEXT1: {
    fontWeight: '500',
    margin: 10,
    textAlign: 'center',
    
    
  },
  videoContainer: {
    margin: 10,
    // Genişlik, ebeveynin genişliğiyle uyumlu olsun
    width: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    borderRadius: 5,
   
  },
  containerImage: {
    alignItems: 'center ',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin : 12,
   
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 9
  },
  VİEW2: {
    marginLeft: 30,
    margin: 18,
  
  },
  TEXT2: {
    fontWeight: 'bold',
    fontSize: 25

  },

  buttonContent: {
    alignItems: 'center',
  },
  button: {
    // Buton için ek stil verilebilir (örneğin margin, padding vs.)
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    margin: 15,
    
  
  },
  buttonImage: {
    width: 250,
    height: 120,
    borderRadius: 5,
    // İsteğe bağlı: borderRadius, margin vs.
    borderWidth: 1
  },
  buttonText: {
   marginTop: 9,
   fontSize: 12,
   color: 'gray',

  },
  
  buttonText2: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left', // Metni sola hizalar,
    
  }
 
});

export default NautilusScreen;

