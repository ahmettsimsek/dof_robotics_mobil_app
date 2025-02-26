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
import FlyingTheataerL_banner_data from '../../components/CardScreenSpecial/FlyingTheataerL_banner_data.json';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function FlyingTheataerLScreen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/jsdeA7QtLi5IhfGKfAnEbJRI7jtNToaKSKqQ5vVD.png'}
  ];



  const[ imageIndex, setImageIndex] = useState(0);
  const[ imageVisible, setImageVisible] = useState(false);

  const flatListRef = useRef(null);
  let scrollIndex = 0;
  let isScrollingRight = true;

  useEffect(() => {
    const interval = setInterval(() => {
      // Sağa kaydırma
      if (isScrollingRight) {
        scrollIndex++;
        if (scrollIndex >= FlyingTheataerL_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Flying Theataer L</Text>
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
            data={FlyingTheataerL_banner_data}
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
            Our Flying theater LS developed using 2 DOF suspended seats module with the possibility to use 6DOF as well for a 360-degree experience. With the LS flying theater we are taking the VR theater experience to the next level. When the guests are safely seated the platforms lifts the guests’ seats toward the large format dome screen, taking them straight into the action. Our ride system allows them to experience the impossible thanks to our suspended platforms and film content. Moreover, we have incorporated a wide selection of special effects such as water, rain, smell, and many more to enhance the experience.
            </Text>

            <Text style={styles.TEXT1}>
            Additionally, the lifting system concept makes it a small-scale platform that is suitable for infinite locations as it doesn’t require too much space compared to our large-scale flying theater MLP
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

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="QV6uYFG4EW4"
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
              <Text style = {styles.TEXT2}>Benzer</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Hurricane')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/MB59v6SeQjgqoy7eIp5194YgtcTNLntwMVV3Gx0T.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Hurricane</Text>
                 
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Supernova')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/Fwl2o1L5YpinWHgCjOJ7jMIo6zyTCweFRAMDmM55.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Supernova</Text>
                 
              </TouchableOpacity>
            </View>


            <View style={styles.buttonContent}>
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Nautilus')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/beSDbOulByu5MuVWXs2xXXMJQn2H3Ethhr5BOTOr.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Nautilus</Text>
                 
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

export default FlyingTheataerLScreen;


