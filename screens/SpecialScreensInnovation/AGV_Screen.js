import { 
    View, 
    Text, 
    SafeAreaView, 
    FlatList, 
    ScrollView, 
    Image, 
    StyleSheet, 
    Dimensions, 
  } from 'react-native';
  import React from 'react';
  import AGV_banner_data from '../../components/CardScreenSpecial/AGV_banner_data.json';
  import { useNavigation } from '@react-navigation/native';
  
  function AGV_Screen () {
    const navigation = useNavigation();
   
    return (
      <SafeAreaView style={styles.container}>
          <Text style = {styles.textContainer}> AGV</Text>
        <FlatList
          data={[]} // Liste verisi yok, header ve footer içeriğini kullanacağız
          keyExtractor={() => 'dummy'} // aşağı-yukarı harket için her şeyi flatlist içine almak için yaptık
          contentContainerStyle={{ flexGrow: 1 }}
          // Üst kısım (header): Başlık ve yatay banner
          ListHeaderComponent={() => (
            <>
             
              <View style={styles.scrollContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                  {AGV_banner_data.map(bannerPark => (
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
              <Text style={styles.TEXT1}>
                - We help industries unlock their business potential by making their hard work pleasant and more efficient with our fully autonomous robots, IGVs and AGVs that move and transport items in production sites, warehouses, and distribution centers without manual intervention.
              </Text>

              <Text style={styles.TEXT1}>
              Our automated guided vehicle solutions include :
              </Text>

               <Text>    • On-Site Service including installation and commissioning</Text>
               <Text>    • Cost-effective maintenance and spare parts packages</Text>
               <Text>    • Competitive prices</Text>
               <Text>    • 24/7 Professional technical support</Text>

               <Text style={styles.TEXT1}>
               Thanks to DOF Robotics expertise with Automated Guided Vehicles (AGVs), you will be able to transform your rigid warehousing and logistics processes to a fully optimized and flexible operations. Our AGV innovative solution guarantees a high productivity combined with ultimate safety measures.
              </Text>

              <Text style={styles.TEXTA}>
              Free navigation system
              </Text>

              <Text style={styles.TEXTB}>
              With our solution you don't need to change your warehouse or production site infrastructure. DOF AGV uses the natural navigation system with reflectors which allows it to locate itself and navigate freely in existing environments without the need for markers.
              </Text>

              <Text style={styles.TEXTA}>
              The best traffic management and sequencing
              </Text>

              <Text style={styles.TEXTB}>
              The AGV's smart algorithms optimize your warehouse flows with the best traffic control and precise task management. It can easily avoid traffic jams and respond promptly to unexpected obstacles.
              </Text>

              <Text style={styles.TEXTA}>
              Fast operating speed and yet safe
              </Text>

              <Text style={styles.TEXTB}>
              Our AGV operates at a speed of 1.5 m /s which improves the efficiency of your logistic processes. It constantly scans, intercommunicates and finds faster route options to accomplish more tasks in less time.
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
      height: Dimensions.get('screen').height / 1.6,
      width: Dimensions.get('screen').width / 0.5, // Genişlik hesaplamasını kontrol edin
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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
    TEXTA: {
        fontWeight: '900',
        margin: 7,
        textAlign: 'left',
        
      },
      TEXTB: {
        fontWeight: '400',
        textAlign: 'center',
        
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
      marginRight: 9,
      margin: 10
    },
    
  

   
  
   
   
  });
  
  export default AGV_Screen;
  
  
