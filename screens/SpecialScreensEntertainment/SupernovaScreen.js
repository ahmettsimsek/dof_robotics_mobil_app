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
import Supernova_banner_data from '../../components/CardScreenSpecial/Supernova_banner_data.json';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function SupernovaScreen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/IJ73whjRnWapiK8hCEPG7GZVSsIJAQfpWG3qXiLy.png'}

  ];

  const images2 = [
    {uri:'https://dofrobotics.com/storage/product-awards/PXOTCZJcnc8dMZBU87RAafJoJVryNAiYbijP0ykU.jpg'}
  ]

  const[ imageIndex, setImageIndex] = useState(0);
  const[ imageVisible, setImageVisible] = useState(false);
  
  const[ imageIndex2, setImageIndex2] = useState(0);
  const[ imageVisible2, setImageVisible2] = useState(false);

  const flatListRef = useRef(null);
  let scrollIndex = 0;
  let isScrollingRight = true;

  useEffect(() => {
    const interval = setInterval(() => {
      // Sağa kaydırma
      if (isScrollingRight) {
        scrollIndex++;
        if (scrollIndex >= Supernova_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Supernova</Text>
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
            data={Supernova_banner_data}
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
            Meet our new generation Supernova, 4-8 seats attraction model. This fantastic ride can be used as a single platform attraction or can be installed in the form of several rides to create a bigger attraction. It can be offered with or without Thematic Shell. Taking users’ feet off the ground and using Hexapods on the backs of the seats, the Supernova offers a great experience of extremely enhanced simulation reality.           
            </Text>
            
            <Text style={styles.TEXT1}>
            Here are some some distinctive features of Supernova:
            </Text>
            <Text>    •  New 2019 6DOF Hexapod robot: Suspended type</Text>
            <Text>    • Fiberglass seats with belts</Text>
            <Text>    • Regenerative Servomotors</Text>
            <Text>    • Motion control Unit</Text>
            <Text>    • Special effects: Water, Rain, Airblast, Fog and Snow devices </Text>
            <Text>      and many more...</Text>
            <Text>    • 2.1 sound system</Text>
            <Text>    • 8 of VR or 15 3D Ride movies with free one-year licenses</Text>
            <Text>    • Customized Screen according to technical drawings</Text>
            <Text>    • Attraction control unit</Text>
            <Text>    • Spare piston, spare cable set, other spare parts available</Text>

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

            <Text>    • Cabin Dimensions: H3,5 x W5 x L7 meters</Text>
            <Text>    • 6DOF (6-axis Hexapod robot)</Text>
            <Text>    • Display: VR Oculus Go VR or 3D projection</Text>
            <Text>    • Sound system: 2.1</Text>
            <Text>    • Motion technology: Suspended Type Electromechanical</Text>
            <Text>      6DOF</Text>
            <Text>    • Motion power:Regenerative Servomotors</Text>
            <Text>    • Synchronisation Technology: Automation Control Units</Text>
         


           

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="7uY7vazQJjg"
              />
            </View>

            <View style = {styles.VİEW2}>
              <Text style = {styles.TEXT2}>Sertifikalarımız</Text>
            </View>

           
            <View style={ styles.container2}>
              <View style={{ flexDirection: 'row' }}>
                {images.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setImageIndex(index);
                        setImageVisible(true);
                      }}
                    >
                      <Image
                        source={{ uri: item.uri }}
                        style={ styles.container2Image}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <ImageView
              images={images}
              imageIndex={imageIndex}
              visible={imageVisible}
              onRequestClose={() => setImageVisible(false)}
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />
           

            <View style = {styles.VİEW2}>
              <Text style = {styles.TEXT2}>Ödüller</Text>
            </View>

            <View style={ styles.container2}>
              <View style={{ flexDirection: 'row' }}>
                {images2.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setImageIndex2(index);
                        setImageVisible2(true);
                      }}
                    >
                      <Image
                        source={{ uri: item.uri }}
                        style={ styles.container3Image}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <ImageView
              images={images2}
              imageIndex={imageIndex2}
              visible={imageVisible2}
              onRequestClose={() => setImageVisible2(false)}
            />
            
            <View style = {styles.VİEW2}>
              <Text style = {styles.TEXT2}>Benzer</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('FlyingM')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/ttacDDzVphnQCO90cLKmEIqTbbnLPdItQ83qNyKj.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Flying Theataer M</Text>
                 
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('DarkRide')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/MLL7lAruUTHIvhd0hJH8T6YChUuSrA5dxYxRl5gs.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Dark Ride</Text>
                 
              </TouchableOpacity>
            </View>


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
    height: Dimensions.get('screen').height / 3,
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
    marginTop: 15
   
  },
  containerImage: {
    alignItems: 'center ',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin : 23,
  
   
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
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  },
  container2Image: {
    marginLeft: 8,
    marginRight: 8,
    width: 110,
    height: 150, 
    borderWidth:0.7, 
    marginBottom:20 
  },
  container3Image: {
    marginLeft: 8,
    marginRight: 8,
    width: 110,
    height: 150, 
    borderWidth:1.3, 
    marginBottom:20 
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

export default SupernovaScreen;


