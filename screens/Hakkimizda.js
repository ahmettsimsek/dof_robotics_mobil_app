import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Hakkimizda_data from '../components/CardScreenSpecial/Hakkimizda_data.json';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe'; // YouTube bileşenini içe aktarın

function Hakkimizda () {
  const navigation = useNavigation();
  // FlatList Elemanı
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.circularImage} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.position} numberOfLines={2}>{item.description}</Text>
    </View>
  );

  const scrollRef = useRef();
  let scrollPosition = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollPosition += 300; // Her kaydırmada gidilecek mesafe
        scrollRef.current.scrollTo({ x: scrollPosition, animated: true });
      }
    }, 2000); // 2 saniyede bir kaydırma

    return () => clearInterval(intervalId); // Bileşen kaldırıldığında interval'i temizle
  }, []);


  const countryMarkers = [

      { id: 1, title: "Türkiye", latitude: 39.9334, longitude: 32.8597 },
      { id: 2, title: "Almanya", latitude: 51.1657, longitude: 10.4515 },
      { id: 3, title: "Fransa", latitude: 48.8566, longitude: 2.3522 },
      { id: 4, title: "İtalya", latitude: 41.9028, longitude: 12.4964 },
      { id: 5, title: "İngiltere", latitude: 51.5074, longitude: -0.1278 },
      { id: 6, title: "Kanada", latitude: 56.1304, longitude: -106.3468 },
      { id: 7, title: "Meksika", latitude: 23.6345, longitude: -102.5528 },
      { id: 8, title: "Kolombiya", latitude: 4.5709, longitude: -74.2973 },
      { id: 9, title: "Şili", latitude: -35.6751, longitude: -71.5430 },
      { id: 10, title: "Fas", latitude: 31.7917, longitude: -7.0926 },
      { id: 11, title: "Mısır", latitude: 26.8206, longitude: 30.8025 },
      { id: 12, title: "Yunanistan", latitude: 39.0742, longitude: 21.8243 },
      { id: 13, title: "Suudi Arabistan", latitude: 23.8859, longitude: 45.0792 },
      { id: 14, title: "İran", latitude: 32.4279, longitude: 53.6880 },
      { id: 15, title: "Pakistan", latitude: 30.3753, longitude: 69.3451 },
      { id: 16, title: "Bangladeş", latitude: 23.6850, longitude: 90.3563 },
      { id: 17, title: "Çin", latitude: 35.8617, longitude: 104.1954 },
      { id: 18, title: "Malezya", latitude: 4.2105, longitude: 101.9758 },
      { id: 19, title: "Endonezya", latitude: -0.7893, longitude: 113.9213 },
      { id: 20, title: "Etiyopya", latitude: 9.1450, longitude: 40.4897 },
      { id: 21, title: "Fildişi Sahili", latitude: 7.539989, longitude: -5.547080 },
      { id: 22,  title: "Zambia", latitude: -13.1339, longitude: 27.8493 },
      { id: 23, title: "Moğolistan", latitude: 46.8625, longitude: 103.8467 },
      { id: 24, title: "Ukrayna", latitude: 48.3794, longitude: 31.1656 },
      { id: 25, title: "Kazakistan", latitude: 48.0196, longitude: 66.9237 },
      { id: 26, title: "Türkmenistan", latitude: 38.9697, longitude: 59.5563 },
      { id: 27, title: "Umman", latitude: 21.5126, longitude: 55.9233 },
      { id: 28, title: "Birleşik Arap Emirlikleri", latitude: 23.4241, longitude: 53.8478 },
      { id: 29, title: "Gana", latitude: 7.9465, longitude: -1.0232 },
      { id: 30, title: "Puerto Rico", latitude: 18.2208, longitude: -66.5901 }

  ];
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}> Hakkımızda</Text>
      <FlatList
        data={[]} // Üst kısımlar header olarak gösterilecek
        keyExtractor={() => 'dummy'}
        contentContainerStyle={{ flexGrow: 1 }}
        
        // Üst kısım (header)
        ListHeaderComponent={() => (
          <>
            <View style={styles.containerImage}>
              <View style={styles.row}>
                <Image
                  source={{ uri: 'https://dofrobotics.com/assets/icons/mission.webp' }}
                  style={styles.image}
                />
                <Text style={styles.textRight}>Görevimiz: Teknoloji ile sınırları aşmak.</Text>
              </View>

              <View style={styles.row}>
                <Image
                  source={{ uri: 'https://dofrobotics.com/assets/icons/vision.webp' }}
                  style={styles.image}
                />
                <Text style={styles.textRight}>Vizyonumuz: Geleceği şekillendirmek.</Text>
              </View>

              <View style={styles.row}>
                <Image
                  source={{ uri: 'https://dofrobotics.com/assets/icons/values.webp' }}
                  style={styles.image}
                />
                <Text style={styles.textRight}>Değerlerimiz: İnovasyon ve güvenilirlik.</Text>
              </View>

              <View style={styles.header}>
                <Text style={styles.headerText}>Şirketimiz</Text>
              </View>

              <View style={styles.imageHeader}>
                <Image
                  source={{ uri: 'https://dofrobotics.com/img/dof-team-award33.jpg' }}
                  style={styles.resimStili}
                />
              </View>

              <View style={styles.header}>
                <Text style={styles.headerText}>Takımımız</Text>
              </View>
            </View>
          </>
        )}

        // Alt kısım (footer) - FlatList Ekleniyor
        ListFooterComponent={() => (
          <>
          <FlatList
            data={Hakkimizda_data}
            renderItem={renderItem}
            keyExtractor={item => item.u_id.toString()}
            numColumns={2} // 2 sütun halinde gösterecek
            contentContainerStyle={styles.flatList}
          />    

           <View style={styles.header}>
                <Text style={styles.headerText}>Çalışmalarımız</Text>
           </View> 

           <View style={styles.containerMap}>
          <MapView
            style={styles.map}
          >
            {countryMarkers.map((country) => (
              <Marker
                key={country.id}
                coordinate={{ latitude: country.latitude, longitude: country.longitude }}
                title={country.title}
                image={{ uri: 'https://img.icons8.com/color/48/000000/marker.png' }}
              />
            ))}
          </MapView>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>Ödüllerimiz</Text>
        </View>

         <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <View style={{flexDirection: 'row'}}>
                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul1')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/VLe2OslMEbN19o4PBQNZhSbrpDCy4KIhz5Lb0KgN.webp' }}
                          style={styles.buttonImage}               
                        />             
                         <Text style={styles.buttonText2}> Another Award to Digital Park: Mission</Text>
                         <Text style={styles.buttonText2}> Space ..</Text>                        
                      </TouchableOpacity>
                    </View>
        
                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul2')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/5FS9qDzrZD2GXpul9WCv4QXWer5lWMLtGj8Y29bp.webp' }}
                          style={styles.buttonImage}               
                        />
                         <Text style={styles.buttonText2} >Digital Park: Mission Space awarded</Text>
                         <Text style={styles.buttonText2} >IAAPA Brass Ring Best New Product</Text>
                        
                      </TouchableOpacity>
                    </View>
        
                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul3')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/0wchzhkj9EyFZaJB6SLyy7EWnQXOXqcyDWq3yCwa.webp' }}
                          style={styles.buttonImage}               
                        />                  
                         <Text style={styles.buttonText2}>DOF proudly presents DIGITAL PARK:</Text>
                         <Text style={styles.buttonText2}> Mission Space</Text>                        
                      </TouchableOpacity>
                    </View>
        
        
                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul4')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/lDqXQNu7g5MALaNo7yMEmbSOlohocHY9TR6CLZ7h.webp' }}
                          style={styles.buttonImage}               
                        />
                         <Text style={styles.buttonText2}>What are the benefits of an XD Movie</Text>
                         <Text style={styles.buttonText2}>theater? -What Viewers Should Kno...</Text>                         
                      </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul5')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/DdBWttWnqysPBXAG4q1PgyQFP0LkjG74NBNv6EOS.webp' }}
                          style={styles.buttonImage}               
                        />
                         <Text style={styles.buttonText2}>DOF Robotics is develoing Mission</Text>
                         <Text style={styles.buttonText2}>Space as new Digital Park Concept</Text>
                       
                      </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul6')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/vrpDET0TeXYG7uzn1IfxWmwu1ANH3bRb0ewLtORp.webp' }}
                          style={styles.buttonImage}               
                        />

                         <Text style={styles.buttonText2}>Most anticipated IP-based dynamic VR</Text>
                         <Text style={styles.buttonText2}>simulator Monster Jam ™ Grave Dig...</Text>                         
                      </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul7')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/YWbXF6paDNdDyqkdpBUYc1wpZdsuHBk47tmvBqUI.webp' }}
                          style={styles.buttonImage}               
                        />
                         <Text style={styles.buttonText2}>DOF Robotics presents new</Text>
                         <Text style={styles.buttonText2}>Tally Trade Model with</Text>
                         <Text style={styles.buttonText2}>Eximbank</Text>
                         
                      </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContent}>
                      <TouchableOpacity
                      style = {styles.button}
                      onPress={() => navigation.navigate('HakkimizdaOdul8')}
                      >
                        <Image
                          source={{uri: 'https://dofrobotics.com/storage/thumbnails/photos/dOgSIs0jaQV8og7r8dHv5NEczxhD1UM8JEAt9N6J.webp' }}
                          style={styles.buttonImage}               
                        />

                         <Text style={styles.buttonText2}>DOF Robotics wins Attraction Star Award</Text>
                         <Text style={styles.buttonText2}>for latest interactive VR game</Text>
                         
                      </TouchableOpacity>
                    </View>
        
                    </View>  
                    </ScrollView> 

           <View style={styles.header}>
             <Text style={styles.headerText}>Haber Bülteni</Text>
           </View> 

           <ScrollView horizontal showsHorizontalScrollIndicator={true}>
           <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="-feUspqN5gk"
              />
              <Text style={styles.buttonText2}>DOF Robotics in IAAPA Expo Europe 2021</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="ryHkEkbxk9Y"
              />
              <Text style={styles.buttonText2}>
              "BEST NEW PRODUCT" of IAAPA - BRASS RING AWARD 2016</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="ofrSE7RpfoA"
              />
             <Text style={styles.buttonText2}>                    
             CNN TURK TV Channel Interview in CES 2019 Las Vegas..</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="ZCj17_Mifgw"
              />
              <Text style={styles.buttonText2}>
              DOF Robotics IAAPA Brass Ring Award interview</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="dR2PiGyNgdE"
              />
              <Text style={styles.buttonText2}>
              DOF Robotics - NBC News3 Live TV Broadcast at CES 2019 Las Vegas</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="DyseEyAxiwA"
              />
               <Text style={styles.buttonText2}>
               DOF Robotics at FEC Summit 2019 Austin, Texas !</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="cwMpO2cgQME"
              />
                 <Text style={styles.buttonText2}>
                 Arc of Europe DOF ROBOTIK Frankfurt 2016</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="f7tI2i3P8T4"
              />
              <Text style={styles.buttonText2}>
              The Arc of Europe Frankfurt 2016</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="s2iTSL6k4CU"
              />
              <Text style={styles.buttonText2}>
              Dof Robotik Atrax 2016</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="_ZQbV-mWVuE"
              />
              <Text style={styles.buttonText2}>
              Dof Robotics - Haber Global TV - Bi Tık Dünya RÖPORTAJI</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="1fIfXPm5UBA"
              />
              <Text style={styles.buttonText2}>
              Dof Robotics Yön. Kur. Başkanı Sn. Mustafa Mertcan - Bloomberg HT Ana Haber'de</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="RdCsXR1tLkQ"
              />
              <Text style={styles.buttonText2}>
              DOF Robotics Yön. Kur. Bşk. Mustafa Mertcan - Sadi Özdemir'in Sorularını Yanıtladı</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="TJw9rPddcRw"
              />
              <Text style={styles.buttonText2}>
              Eğlence Sektöründe Teknoloji, Tekno Alan, 24TV</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="1fIfXPm5UBA"
              />
              <Text style={styles.buttonText2}>
              Dof Robotics Yön. Kur. Başkanı Sn. Mustafa Mertcan - Bloomberg HT Ana Haber'de</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="WKXaDtqnWSA"
              />
              <Text style={styles.buttonText2}>
              DOF Robotics Ailesi - Olarak Sağlık Çalışanları İçin Ücretsiz Maske Üretiyoruz</Text>
            </View>

            <View style={styles.videoContainer}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId="vv9x6_z5KO8"
              />
              <Text style={styles.buttonText2}>
              DOF Robotics - Sağlık Çalışanları İçin Ücretsiz Siper Maske Üretiyor</Text>
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
    backgroundColor: '#fff',
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 6,
    paddingTop: 50,
    fontSize: 22,
    backgroundColor: '#dcdcdc',
  },
  containerImage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    margin: 12,
  },
  row: {
    flexDirection: 'row', // Resim ve metni yatayda hizalar
    alignItems: 'center', // Resim ve metni ortalar
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 10, // Köşeleri yuvarlatır
  },
  textRight: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  header: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
  },
  imageHeader: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  resimStili: {
    height: 230,
    width: 370,
  },
  flatList: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  circularImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Dairesel yapar
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  position: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  containerMap: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: 370,
    height: 300,
    margin: 20,
    borderRadius: 77,
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
    width: 350,
    height: 200,
    borderRadius: 5,
    // İsteğe bağlı: borderRadius, margin vs.
    borderWidth: 1
  }, 
  buttonText2: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left', // Metni sola hizalar,
    
  },
  videoContainer: {
      margin: 20,
      // Genişlik, ebeveynin genişliğiyle uyumlu olsun
      width: Dimensions.get('screen').width - 20,
      width: Dimensions.get('screen').width / 1.2,
      alignSelf: 'center',
      borderRadius: 5,
     
    },
});

export default Hakkimizda;
