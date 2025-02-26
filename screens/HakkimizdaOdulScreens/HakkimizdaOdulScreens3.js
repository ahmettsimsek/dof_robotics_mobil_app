import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const HakkimizdaOdulScreens3 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.textContainer}>DIGITAL PARK: Mission Space</Text>
      <View style={styles.container2}>
        <Image
          source={{uri: 'https://dofrobotics.com/storage/photos/0wchzhkj9EyFZaJB6SLyy7EWnQXOXqcyDWq3yCwa.png'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style = {styles.textView}>
      <Text style = {styles.text}>Nov 6, 2022</Text>
      </View>

      <View style = {styles.textView2}>
      <Text style = {styles.text2}>DIGITAL PARK: Mission Space</Text>
      </View>


       <Text style={styles.textView3}>
       We are thrilled to announce that DOF Robotics has developed the unique Digital Park, that has no analogues around the world! It is Mission Space, and it will for sure stretch the bounds of your imagination. This never-before-seen Digital Park experience will enable the individuals to step into space. Get ready, our rocket is launching! Three, two, one…
      </Text>

       <Text style={styles.textView3}>
       As DOF Robotics, we are producing E2E solutions and listening the clients’ requirements. This digital park concept is promising incredible and immersive 30-40 mins space experience to the visitors. 
       </Text>

       <Text style={styles.textView3}>
       Visitors will be included in the simulation in teams of 6 people. As a character in a story, they will fulfil the space mission given to them. During the mission, they will experience 8 different areas. Each area is a specially designed simulator to give them a different space experience. Each simulator is designed in harmony with the scenario in terms of theme and content to give the feeling of space travel.
       </Text>

       <Text style={styles.textView3}>
       This theme park has been created for everyone over the age of 4 to experience. During the adventure, information about space will be also given. Entertainment and education will be experienced and combined together. At the end of the 30-40 mins experience, visitors will gain valuable information as well as having a unique experience about space. They will also have the opportunity to compete with two interactive games.
       </Text>

       <Text style={styles.textView4}>
       Stages:
       </Text>

       <Text style={styles.textView3}>
       The 6-person team puts on their astronaut costumes over their clothes in the welcome and preparation area.
       </Text>

       <Text style={styles.textView3}>
       In the preshow area, which is themed according to the scenario, information about the adventure is given to the visitors on specially designed screens and holograms.
After boarding a rocket simulator, visitors will experience a rocket launch into space. Real themes and animations will be used for this immersive experience. And all this will be complemented by an impressively implemented G-force.
       </Text>

       <Text style={styles.textView3}>
       The visitors will leave the rocket that is docked to the International Space Station. Then they will go on journey to the Moon on the “Interplanetary Voyager” (spaceship simulator).
       </Text>

       <Text style={styles.textView4}>
       1st  Interactive Game “Shooter”
       </Text>

       <Text style={styles.textView3}>
       The guests arriving at the space base on the Moon will receive information about the work done from the operators, who are playing the role of researchers.
       Passengers, who embark on a journey of discovery on the Moon with the Planet Explorer simulator (huge moon vehicle). They will experience the pleasure of interactive games on this simulator.
       </Text>

       <Text style={styles.textView4}>
       2nd  Interactive Game “Miner”
       </Text>

       <Text style={styles.textView3}>
       Passengers will bring the collected mines to the space base for further examination. Also, they will have a different experience with the feeling of space provided by the moving platform.
       Having completed the mission, the team will make a fast and fun return journey to Earth with the spaceship. At the end of the experience, they will get the title and ID card of “Real Astronaut” with their photo, which will be kept as a souvenir. 
       </Text>

       <Text style={styles.textView4}>
       Shooter (1st Interactive Game)
       </Text>

       <Text style={styles.textView3}>
       Shooter – is the 1st Interactive Game, where participants will encounter with asteroid belt. They will shoot asteroids of different sizes to avoid collision. 
       </Text>
       <Text style={styles.textView3}>
       Participants will compete with one another to get a higher score! Since if they will be at the top of leaderboard, those who got the higher scores than others, their names will be displayed for all to see on the huge display at the entrance of the Digital Park, website and special mobile app.
       </Text>
       <Text style={styles.textView3}>
       Scores calculation will be based on the quantity and sizes of blasted asteroids, also on the speed and reaction of participants.
       </Text>

       <Text style={styles.textView4}>
       Miner (2nd Interactive Game)
       </Text>

       <Text style={styles.textView3}>
       Miner – is the 2nd Interactive Game, where participants will collect cosmic mines, in the process of exploring the surface of the Moon.
       </Text>
       <Text style={styles.textView3}>
       Participants will compete with one another to get a higher score! Since if they will be at the top of leaderboard, those who got the higher scores than others, their names will be displayed for all to see on the huge display at the entrance of the Digital Park, website and special mobile app.
       </Text>
       <Text style={styles.textView3}>
       Scores calculation will be based on the quantity and value of collected mines, also on the speed and reaction of participants.
       </Text>

       <Text style={styles.textView4}>
       Unique Properties
       </Text>

       <Text style={styles.textView5}>
       • Themed digital park where participants can fulfill a space mission by storyliving
       </Text>
       <Text style={styles.textView5}>
       • As a character in a story, they will fulfill the space mission given to them
       </Text>
       <Text style={styles.textView5}>
       • Endless theming(story) options space, underwater, timetravelling, zombi adventure
       </Text>
       <Text style={styles.textView5}>
       • Capacity is from 6-30 guests per session(6 session per hour) and session lasts about an hour
       </Text>
       <Text style={styles.textView5}>
       • Experience several zones with various vehicles
       </Text>
       <Text style={styles.textView5}>
       • Great edutainment opportunity
       </Text>
       <Text style={styles.textView5}>
       • World's first interactive staged digital park experience ever
       </Text>
       <Text style={styles.textView5}>
       • First project installed in Camlica Tower Istanbul Turkey
       </Text>
       <Text style={styles.textView5}>
       • Finalist for Brass Ring Best New Product: Category 1 Major/Ride Attraction Class B
       </Text>

       <Text style={styles.textView4}>
       Who is DOF Robotics
       </Text>

       <Text style={styles.textView3}>
       DOF Robotics is a multi-disciplinary amusement attractions creator who challenges the status quo by enriching experiences with high technology and creative storytelling.
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

export default HakkimizdaOdulScreens3;




