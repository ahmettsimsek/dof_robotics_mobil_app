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
import Atlantis_banner_data from '../../components/CardScreenSpecial/Atlantis_banner_data.json';
import ImageView  from 'react-native-image-viewing'
import { useNavigation } from '@react-navigation/native';

function AtlantisScreen () {
  const navigation = useNavigation();
  const images= [
    {uri:'https://dofrobotics.com/storage/product-certificates/v2fRAc2cRzy5gm2RFRoohF9D7VpRYbviJqm2V4x6.png'}
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
        if (scrollIndex >= Atlantis_banner_data.length - 1) {
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
        <Text style = {styles.textContainer}> Atlantis</Text>
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
            data={Atlantis_banner_data}
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
            Get to know DOF’s ATLANTIS xD. It is a special 2DOF Xd Cinema platform with a capacity of 4-500 seats that is suitable for content with longer durations. Although 4 seat-platforms are designed for smaller spaces, several ATLANTIS platforms can be brought together to create Big XD Cinemas with a capacity of up to 200-500 seats. Most ATLANTIS attractions have Big Screens and 3D Passive Systems as well as several kinds of XD Effects like Water, Wind, Flash, Fog, and many others.   
            </Text>

            <Text style={styles.TEXT1}>
            ATLANTIS motion base features are: 
            </Text>

            <Text>    • New 2019 Model 2-Axis robot: Bottom type</Text>
            <Text>    • Fiberglass seats</Text>
            <Text>    • Automation control Unit</Text>
            <Text>    • 2 sensors for each axis</Text>
            <Text>    • Special Effects package: Water, Rain, Airblast, </Text>
            <Text>      Fog, Snow, etc...</Text>
            <Text>    • 2.1 Sound system</Text>
            <Text>    • 5.1 Sound system for Big Cinemas</Text>
            <Text>    • Motion control unit</Text>
            <Text>    • Spare piston, spare cable set, other spare parts</Text>
            


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



            <Text>    • 4-seat Platform Cinema needs (meter): H2,5 x W3 x L4</Text>
            <Text>    • 2 DOF (2-axis Robot)</Text>
            <Text>    • View system: 3D projection or VR</Text>
            <Text>    • Sound system: 2.1 Sound system</Text>
            <Text>    • Motion technology: Bottom Type Electromechanical 2 Axis</Text>
            <Text>    • Motion power: Siemens Regenerative Servomotors</Text>
            <Text>    • Synchronisation Technology: Electromechanical</Text>
   

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

export default AtlantisScreen;
