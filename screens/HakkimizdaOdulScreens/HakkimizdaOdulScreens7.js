import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens7 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>DOF Robotics presents new Tally Trade Model with Eximbank</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/YWbXF6paDNdDyqkdpBUYc1wpZdsuHBk47tmvBqUI.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Apr 22, 2021</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>DOF Robotics presents new Tally Trade Model with Eximbank</Text>
      </View>


       <Text style={styles.textView3}>
       DOF Robotics, a producer of dynamic simulation platforms, has worked with Eximbank to implement a new Tally Trade Model, in order to support clients and meet their needs. The company required a long-term trade model as it exports 90% of its total sales to over 80 different countries around the world, and is now ready to roll out the new solution from this month.
      </Text>


       <Text style={styles.textView3}>
       Speaking about the model, Ahmet Enes Aladaş, Chief Commercial Officer of DOF Robotics, says: “DOF Robotics, a 100 percent Turkish company that produces value-added, high-tech simulators for the entertainment industry, acts with the” branded export” motto.
       “39 percent of our customers are big companies investing in the amusement industry and especially Family Entertainment Centers and 28 percent are Theme Parks. This majority starts to get the return on their investment after installing and operating simulators, and these investments can sometimes reach millions of dollars for a single simulator.”
       Meeting client needs.
       </Text>

       <Text style={styles.textView3}>
       “During the pandemic, many investors are trying to survive,” continues Aladaş. “Recently, we have listened to the demands of our global customers and we have put forward the Tally Trade Model together with Eximbank.
       </Text>

       <Text style={styles.textView3}>
       “Now, while our investors pay half of the cost of the product they order from us during production as advanced payment, they can pay the remaining half exactly 1 year after the simulator is installed and put into operation. In this way, we aim to support our customers who wait for the end of the pandemic for investment in this critical process.”
       </Text>

       <Text style={styles.textView3}>
       The company will begin by offering this model for a certain number of its simulators in 2021 and has now added an ROI calculation module on its website. This will allow potential customers to easily find out the ROI of each product. On average, the ROI is achieved in two years.
       </Text>

       <Text style={styles.textView3}>
       “This is the best possible time for any investment,” says Aladaş. “This fast return on investment cannot be achieved in any other industry. However, since the initial investment cost is high, only big investors have used this opportunity until today. We have offered this opportunity to everyone with the Tally Trade Model.”
       </Text>

       <Text style={styles.textView3}>
       Continuing to innovate
       </Text>

       <Text style={styles.textView3}>
       Its partner for this new scheme, Eximbank, is an export credit bank, meaning that the company’s foreign customers will benefit. However, DOF Robotics is also supporting its Turkish customers with a different model as well.
       </Text>

       <Text style={styles.textView3}>
       While the last year has been challenging for the attractions industry, DOF Robotics has continued to invest in production and R&D and this work has been recognised by an IAAPA Brass Ring Award and a CES Innovation Award.
       </Text>

       <Text style={styles.textView3}>
       “Despite the pandemic in 2020, we have completed our sales targets, and in the first quarter of 2021, we exceeded our total sales figures for 2020,” says Aladaş. “This year, our goals are very high, and we are moving towards these goals with great determination.”
       </Text>

       <Text style={styles.textView3}>
       Last month, DOF Robotics also launched its revamped website, providing a streamlined, user-friendly experience for customers. 
       </Text>

       </ScrollView>
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
    paddingTop: 40,
    fontSize: 22,
    backgroundColor: '#dcdcdc',
  },
  container2: {
     // Ekranın tamamını kaplayacak
    justifyContent: 'center', // Dikeyde ortalama
    alignItems: 'center', // Yatayda ortalama
    marginTop: 55
  },
  image: {
    height: Dimensions.get('screen').height / 4.35,
    width: Dimensions.get('screen').width / 1.1,
    borderRadius: 10, // Köşeleri hafif yuvarlatır
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
    justifyContent: 'center',
    color: 'gray'
  },
  text2: {
    fontSize: 22,
    fontWeight: '900',
    justifyContent: 'center'
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
  },
  textView2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12
  },
  textView3: {
    fontWeight: '400',
    margin: 3,
    textAlign: 'center',
  },
  textView4: {
    fontWeight: '800',
    margin: 10,
    textAlign: 'center',
    marginBottom: 2
  },
  textView5: {
    fontWeight: '400',
    margin: 1,
    textAlign: 'center',

  }
});

export default HakkimizdaOdulScreens7;


