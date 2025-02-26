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
import Hurricane_banner_data from '../../components/CardScreenSpecial/Hurricane_banner_data.json';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function HurricaneScreen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/G9Nqm69HjGOMZhkTRVa94oxwfKo7dTKjSJcHpovP.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/TXxV28vXzvnQCRhXnWiTOEGN9vxdwfaIh1BQLtZG.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/g4j42eNr9rDRL3VMs8qZe3scZ2mlPiaZW6C6TERy.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/d1y1Md1V6lAMTbeOjegkMMHG0nAYJsBHX2nFCeQ2.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/uL3I8JN7hvPC5OXJv7CV5quYSCUc71oZe8lNR6kX.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/xW4QndiJLuSRnnBwD3VQDJHUFlAH6zZGWv7QRamv.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/t38mWMpTxzEOyJBuoXkRgaXUCfSpLRGrA4yV7Yrk.png'}
  ];

  const images2 = [
    {uri:'https://dofrobotics.com/storage/product-awards/FS1kh5uVqYBerdNwAnRt0eHDvsbHXYunQcmyDauh.jpg'},
    {uri:'https://dofrobotics.com/storage/product-awards/lIAeWGAPs3L95VyM7hjSLiMQ7ERq3ERTpGDqRb67.jpg'}
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
        if (scrollIndex >= Hurricane_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Hurricane</Text>
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
            data={Hurricane_banner_data}
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
            Our pride of place is Hurricane 360, DOF’s newest ride. Hurricane 360 is a 4-seat model, 6-Axis Motion Ride with a 360-degree rotation capability, which makes it a 7DOF. The ride uses specially designed Shoulder Harness Coaster Seats. It is compatible with VR, Dome or Flat screens.             
            </Text>
            
            <Text style={styles.TEXT1}>
            Here are some of the prominent features of our Hurricane 360:
            </Text>
            <Text>    •  New 2019 Model Themed attraction: Suspended 6DOF</Text>
            <Text>       with 360 rotation</Text>
            <Text>    •  Fiberglass Shoulder Harness seats with additional belt locks</Text>
            <Text>    •  Regenerative Servomotors</Text>
            <Text>    •  Motion control unit</Text>
            <Text>    •  6 sensors for each axis</Text>
            <Text>    •  Special Effects including Water, Rain, Airblast, Fog and</Text>
            <Text>       Snow devices</Text>
            <Text>    •  VR, Dome or Flat Screen options</Text>
            <Text>    •  2.1 Sound System Quality</Text>
            <Text>    •  VR or 3D Ride movies</Text>
            <Text>    •  Attraction control unit</Text>
            <Text>    •  Spare piston, Spare cable set and other spare parts available</Text>


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

            <Text>    •  Thematic cover: W5m x L7,5m x H4,2m</Text>
            <Text>    •  DOF number: 7 DOF (6-axis Hexapod robot + 360</Text>
            <Text>       Rotation axis)</Text>
            <Text>    •  Viewing system: VR or Flat Screen</Text>
            <Text>    •  Sound system: 2.1 or 5.1 Sound system</Text>
            <Text>    •  Motion technology: Electromechanical 6-Axis</Text>
            <Text>    •  Motion power: Regenerative Servomotors</Text>
            <Text>    •  Synchronisation Technology: Simotion Control Units</Text>



           

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="2_sn86KQKUo"
              />
            </View>

            <View style = {styles.VİEW2}>
              <Text style = {styles.TEXT2}>Sertifikalarımız</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
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
            </ScrollView>

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


            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Riot')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/6bmpsPtDq8UttPmDGWjiGaEi6b3jPalAvKHWYyU6.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Riot</Text>
                 
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Riot360')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/KG2Q7nWZxJcOLUje1tLylGSigrUtIqKfh33mAfBA.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Riot 360</Text>
                 
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
    height: Dimensions.get('screen').height / 2.9,
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

export default HurricaneScreen;
