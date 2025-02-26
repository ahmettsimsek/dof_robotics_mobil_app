import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens4 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>What are the benefits of an XD theater?</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/lDqXQNu7g5MALaNo7yMEmbSOlohocHY9TR6CLZ7h.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Oct 10, 2022</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>What are the benefits of an XD theater?</Text>
      </View>


       <Text style={styles.textView3}>
       An XD Movie theater is a movie theater that uses a technology called extreme digital (XD) to project movies. This technology is a type of digital projection that uses a special projector to deliver a sharper image with more vibrant colors. XD theaters also feature a higher-quality sound system than traditional movie theaters.
      </Text>

      <Text style={styles.textView4}>
      Benefits of XD Cinema
       </Text>

       <Text style={styles.textView3}>
       There are several benefits to watching movies in an XD cinema. Image quality is significantly better than in traditional movie theaters. Colors are more vibrant and the image is sharper. This can provide a more immersive and enjoyable experience. Additionally, the sound quality is also significantly better. This can create a more realistic and exciting experience for viewers.
       </Text>

       <Text style={styles.textView3}>
       Second, the sound quality in an XD theater is also superior to traditional movie theaters. The sound system is designed to provide a more realistic and enveloping soundscape. This can make it feel as if you are right in the middle of the action.
       </Text>

       <Text style={styles.textView3}>
       Another benefit of watching movies in an XD cinema is that it can be a more social experience. Movie theaters typically have a lobby where people can congregate before and after the movie. This can provide an opportunity for people to socialize and connect with others who share similar interests. Additionally, many theaters have concessions that can add to the social experience.
       </Text>

       <Text style={styles.textView3}>
       Finally, watching movies in an XD cinema can be a more affordable option than in other movie theaters. Movie theaters typically charge a premium for XD screenings. However, there are often discounts available for those who purchase tickets in advance or for group screenings.

       Some people may find the sound quality in an XD theater to be too loud or overwhelming. If you are sensitive to loud noises, you may want to bring earplugs to protect your ears.
       </Text>

       <Text style={styles.textView3}>
       Some people may find the sound quality in an XD theater to be too loud or overwhelming. If you are sensitive to loud noises, you may want to bring earplugs to protect your ears.
       </Text>

       <Text style={styles.textView3}>
       Overall, the sound quality in an XD theater is much better than in a traditional movie theater. The sound system is designed to provide a more realistic and enveloping soundscape, making it feel as if you are right in the middle of the action.
       </Text>

       <Text style={styles.textView3}>
       Third, XD theaters often feature comfortable seating and a variety of food and drink options. This can make for a more relaxed and enjoyable experience.
       </Text>

       <Text style={styles.textView3}>
       Digital projection provides the clearest, most realistic images and colors, which can be enjoyed by moviegoers of all ages.
       </Text>

       <Text style={styles.textView3}>
       Stadium seating is typically found in larger theaters, where every seat is on the same level. This allows for a clear view of the screen from anywhere in the theater.
       </Text>

       <Text style={styles.textView3}>
       Recliner seating is a newer option in movie theaters. These comfortable chairs can be reclined and offer extra legroom, making them a great option for those who want a more relaxing experience.
       </Text>

       <Text style={styles.textView3}>
       Designated areas for parents with young children are common in movie theaters, making it easier to take a break from the action if needed.
       </Text>

       <Text style={styles.textView3}>
       Some movie theaters are designed to appeal to families and offer activities such as face painting or arcade games.
       </Text>

       <Text style={styles.textView3}>
       Accessibility features are often available in movie theaters, making it easier for those with disabilities to enjoy the experience.
       </Text>

       <Text style={styles.textView3}>
       Most movie theaters offer a variety of concessions, such as popcorn, candy, and soft drinks.
       </Text>

       <Text style={styles.textView3}>
       Many also offer a selection of hot foods, such as pizza, hot dogs, and nachos.
       </Text>

       <Text style={styles.textView3}>
       Some movie theaters offer alcohol, making it possible to enjoy a drink while watching a movie.
       </Text>

       <Text style={styles.textView3}>
       Movie theaters often offer a variety of membership or loyalty programs that can provide discounts on tickets and concessions
       </Text>

       <Text style={styles.textView3}>
       Fourth, XD theaters are typically less crowded than traditional movie theaters. This can make it easier to find a seat and avoid long lines.
       </Text>

       <Text style={styles.textView3}>
       XD theaters are typically less crowded than traditional movie theaters. This can make it easier to find a seat and avoid long lines for the restroom. For some movie fans, this is worth the extra price of an XD movie ticket.
       </Text>

       <Text style={styles.textView4}>
       Do I Need Special Tickets to See an XD Movie?
       </Text>


       <Text style={styles.textView3}>
       Most XD theater tickets are sold and priced the same as traditional movie tickets. However, some theaters may charge a premium to see movies in XD.
       </Text>

       <Text style={styles.textView4}>
       Do All Movies Play in XD?
       </Text>

       <Text style={styles.textView3}>
       Some movies are not shown in XD. These are typically older movies or movies that were not filmed in an XD format.
       </Text>

       <Text style={styles.textView4}>
       What Is XD?
       </Text>

       <Text style={styles.textView3}>
       XD is a brand name for a high-definition movie theater system that delivers a sharper, more realistic viewing experience. XD theaters are equipped with a high-powered projector and a surround-sound system.
       </Text>

       <Text style={styles.textView4}>
       What Is the Difference Between XD and IMAX?
       </Text>

       <Text style={styles.textView3}>
       IMAX is a brand name for a similar high-definition movie theater system. However, IMAX theaters use a different type of projector than XD theaters. IMAX theaters also have a larger screen than XD theaters.
       </Text>

       <Text style={styles.textView3}>
       Overall, XD theaters offer a superior experience to traditional movie theaters. If you are looking for the best possible movie-watching experience, then an XD theater is the way to
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

export default HakkimizdaOdulScreens4;





