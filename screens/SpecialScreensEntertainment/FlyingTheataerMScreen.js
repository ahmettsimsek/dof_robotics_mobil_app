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
import FlyingTheataerM_banner_data from '../../components/CardScreenSpecial/FlyingTheataerM_banner_data.json';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function FlyingTheataerMScreen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/0fCG8TUGlBQDigKbt8CZWdpMk1KW51m6qsYBoSu2.png'}
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
        if (scrollIndex >= FlyingTheataerM_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Flying Theataer M</Text>
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
            data={FlyingTheataerM_banner_data}
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
            The Flying Theater MLP is our bestselling large-scale flying theater. It is recommended for bigger projects targeting high numbers of seating options which can be up to 90 seating capacity with our MLP ride system.
            </Text>

            <Text style={styles.TEXT1}>
            Guests are feeling more excited high-up even those with space and motion discomfort. The MLP platforms push the guest’s seats toward the huge domed screen. At this moment, the visitors are already immersed in the storyline thanks to our high-quality motion simulation, projection system, and the incorporated virtual reality. will not feel anything except.
            </Text>

             <Text>    • Total seat capacity: 24 to 90 passengers</Text>
             <Text>    • Base gondola seat capacity: 4 to 8 passengers</Text>
             <Text>    • Allowable passenger size: 1.05 m to 2.05 m</Text>
             <Text>    • Theorical Hourly capacity: 250 to 1800 pasengers </Text>
             <Text>      (may vary depending on the film duration, seat capacity </Text>
             <Text>      of the theater and loading/unloading process)</Text>
             <Text>    • 7DOF(6 axis Hexapod Robot + 360 Rotation axis)</Text>
             <Text>    • High quality sound system</Text>
             <Text>    • High Quality Automation Parts, Servomotors and </Text>
             <Text>      control units</Text>
             <Text>    • ADvanced synchronization system</Text>
             <Text>    • Wind and water effects</Text>
             <Text>    • Safety gates for each platform</Text>


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
                videoId="7_GAfiDGkxw"
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
              onPress={() => navigation.navigate('MonsterJam')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/bAHnlRKb4p2ZLPXmgwkOjxnCNSaESNtU2UQ6n8lj.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Monster Jam</Text>
                 
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
              onPress={() => navigation.navigate('FlyingL')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/lxTmXXwxb2YinjbC3od34a4Kj2wqx1rSzxyaKddX.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}>Flying Theataer L</Text>
                 
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
    height: Dimensions.get('screen').height / 2,
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
    margin : 17,
   
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

export default FlyingTheataerMScreen;



