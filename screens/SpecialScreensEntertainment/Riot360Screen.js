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
import Riot360_banner_data from '../../components/CardScreenSpecial/Riot360_banner_data.json';
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function Riot360Screen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/rTaARsDoCjf0wu3bPPX1z64aHJL52rNG8VjJ9nRy.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/WXmH1R6FSI71H8TY2ujYQzk1ZmreD4K0kbCWrH1E.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/yYWJxweP9RLA06BpZnVKxWw29iA0w3J0wbBW4KlX.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/8zfuxgobeFlMvxrWqR563BZJnl0gEiVbTMcWG6ZP.png'},
    {uri:'https://dofrobotics.com/storage/product-certificates/u6XQ8qD8NgYLCPopwUhHVeCdpmcgKB9V7ybiwesL.png'}
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
        if (scrollIndex >= Riot360_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Riot 360</Text>
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
            data={Riot360_banner_data}
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
            The RIOT 360 model with 4-32 seats or more (up to 250) seats versions. RIOT model can be produced with any number of seats and platforms in accordance with the requirements of your space. We can create a free-of-charge technical drawing based on the sizes and specifications you require and customize the products to meet your needs.    
            </Text>

            <Text style={styles.TEXT1}>
            RIOT Model’s Prominent features:   
            </Text>

            <Text>    • Capable of rotating 360 degrees</Text>
            <Text>    • New 2019 Model 6-Axis Hexapod robot</Text>
            <Text>    • Customized seats with airplane belts </Text>
            <Text>    • One platform containing 6 pieces Siemens Regenerative Servomotors</Text>
            <Text>    • One Siemens Simotion Control Unit</Text>
            <Text>    • Special Effects: Water, Rain, Airblast, Fog, Snow, Leg </Text>
            <Text>      Tickle and more</Text>
            <Text>    • 2.1 sound system quality</Text>
            <Text>    • 10 VR or 10 3D Ride movies with free one year licenses</Text>
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



            <Text>    • Cabin Dimensions (meter): H4 x W5 x L6</Text>
            <Text>    • DOF number: 6 DOF (6 axis Hexapod robot)</Text>
            <Text>    • Immersive: VR or 3D special projector</Text>
            <Text>    • Sound system: 2.1 or 5.1 Sound system</Text>
            <Text>    • Motion technology: Electromechanical 6-Axis</Text>
            <Text>    • Motion power: Regenerative Servomotors</Text>
            <Text>    • Synchronisation Technology: Siemens Simotion Control Units</Text>
   

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
              <Text style = {styles.TEXT2}>Benzer</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{flexDirection: 'row'}}>
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
    height: Dimensions.get('screen').height / 2.6,
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

export default Riot360Screen;

