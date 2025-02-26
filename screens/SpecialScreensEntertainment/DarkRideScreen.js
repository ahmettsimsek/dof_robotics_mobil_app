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
import React, { useState } from 'react';
import DarkRide_banner_data from '../../components/CardScreenSpecial/DarkRide_banner_data.json';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın

function DarkRideScreen () {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {styles.textContainer}> Dark Ride</Text>
      <FlatList
        data={[]} // Liste verisi yok, header ve footer içeriğini kullanacağız
        keyExtractor={() => 'dummy'} // aşağı-yukarı harket için her şeyi flatlist içine almak için yaptık
        contentContainerStyle={{ flexGrow: 1 }}
        // Üst kısım (header): Başlık ve yatay banner
        ListHeaderComponent={() => (
          <>
           
            <View style={styles.scrollContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {DarkRide_banner_data.map(bannerPark => (
                  <Image
                    key={bannerPark.id}
                    style={styles.banner_image}
                    source={{ uri: bannerPark.imageUrl }}
                  />
                ))}
              </ScrollView>
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
            <View style={{marginTop: 15}}>

            <Text>    • 2019 Model 6DOF Hexapod robot: Bottom or Back type</Text>
            <Text>    • Fiberglass seats </Text>
            <Text>    • A single platform containing 6 Siemens Regenerative </Text>
            <Text>      Servomotors</Text>
            <Text>    • One Siemens Simotion control Unit</Text>
            <Text>    • 6 pieces of sensors for each axis</Text>
            <Text>    • Special Effects: Water, Rain, Airblast, Fog, Snow and more..</Text>
            <Text>    • Minimum 150 meters of Dark Ride path</Text>
            <Text>    • Bus-Bar system </Text>
            <Text>    • Special 3D HD Display Systems</Text>
            <Text>    • 3D Active Shutter glasses</Text>
            <Text>    • On Platform Sound system</Text>
            <Text>    • Specially created Dark Ride content</Text>
            <Text>    • Spare piston, spare cable set, other spare parts available</Text>

            </View>


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
                videoId="u56pn3kdf-0"
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
              onPress={() => navigation.navigate('Hurricane')}
              >
                <Image
                  source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/MB59v6SeQjgqoy7eIp5194YgtcTNLntwMVV3Gx0T.webp' }}
                  style={styles.buttonImage}               
                />
                 <Text style={styles.buttonText}>Entertainment</Text>
                 <Text style={styles.buttonText2}> Hurricane</Text>
                 
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
    height: Dimensions.get('screen').height / 1.7,
    width: Dimensions.get('screen').width / 0.5, // Genişlik hesaplamasını kontrol edin
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

export default DarkRideScreen;

