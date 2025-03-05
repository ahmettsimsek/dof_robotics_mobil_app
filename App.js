import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import TabNavigator from './screens/TabNavigator'; // Güncel TabNavigator
import Oduller from './screens/Oduller';
import Referanslar from './screens/Referanslar';
import Hakkimizda from './screens/Hakkimizda';
import Contact from './screens/Contact';
import EntertainmentScreen from './screens/ScreenTypes/EntertainmentScreen';
import FlatMoviesScreen from './screens/ScreenTypes/FlatMoviesScreen';
import VRmoviesScreen from './screens/ScreenTypes/VRmoviesScreen';
import DomeMoviesScreen from './screens/ScreenTypes/DomeMoviesScreen';
import InnovationScreen from './screens/ScreenTypes/InnovationScreen';
import 'react-native-reanimated';


//ENTERTAİNMENT MOVİES SCREEN
import AtlantisScreen from './screens/SpecialScreensEntertainment/AtlantisScreen';
import DarkRideScreen from './screens/SpecialScreensEntertainment/DarkRideScreen';
import DefenderScreen from './screens/SpecialScreensEntertainment/DefenderScreen';
import FlyingTheataerLScreen from './screens/SpecialScreensEntertainment/FlyingTheataerLScreen';
import FlyingTheataerMScreen from './screens/SpecialScreensEntertainment/FlyingTheataerMScreen';
import HurricaneScreen from './screens/SpecialScreensEntertainment/HurricaneScreen';
import MissionSpaceDigitalParkScreen from './screens/SpecialScreensEntertainment/MissionSpaceDigitalParkScreen';
import MonsterJamScreen from './screens/SpecialScreensEntertainment/MonsterJamScreen';
import NautilusScreen from './screens/SpecialScreensEntertainment/NautilusScreen';
import Riot360Screen from './screens/SpecialScreensEntertainment/Riot360Screen';
import RiotScreen from './screens/SpecialScreensEntertainment/RiotScreen';
import SupernovaScreen from './screens/SpecialScreensEntertainment/SupernovaScreen';
import XdTheaterScreen from './screens/SpecialScreensEntertainment/XdTheaterScreen';

//FLAT MOVİES SCREEN
import AerobaticsScreen from './screens/SpecialScreensFlatMovies/AerobaticsScreen';
import AstroCopsScreen from './screens/SpecialScreensFlatMovies/AstroCopsScreen';
import CappadociaCoasterScreen from './screens/SpecialScreensFlatMovies/CappadociaCoasterScreen';
import DinoIslandScreen from './screens/SpecialScreensFlatMovies/DinoIslandScreen';
import FutureBikeScreen from './screens/SpecialScreensFlatMovies/FutureBikeScreen';
import HotPursuit1Screen from './screens/SpecialScreensFlatMovies/HotPursuit1Screen';
import HotPursuit2Screen from './screens/SpecialScreensFlatMovies/HotPursuit2Screen';
import HumanBodyScreen from './screens/SpecialScreensFlatMovies/HumanBodyScreen';
import IceWorldScreen from './screens/SpecialScreensFlatMovies/IceWorldScreen';
import IslandCoasterScreen from './screens/SpecialScreensFlatMovies/IslandCoasterScreen';
import LostWorldScreen from './screens/SpecialScreensFlatMovies/LostWorldScreen';
import MagicWorldScreen from './screens/SpecialScreensFlatMovies/MagicWorldScreen';
import PenguinsScreen from './screens/SpecialScreensFlatMovies/PenguinsScreen';
import RedlineScreen from './screens/SpecialScreensFlatMovies/RedlineScreen';
import SpaceRaceScreen from './screens/SpecialScreensFlatMovies/SpaceRaceScreen';
import UludagSnowboardScreen from './screens/SpecialScreensFlatMovies/UludagSnowboardScreen';
import WallofChinaScreen from './screens/SpecialScreensFlatMovies/WallofChinaScreen';

//VR MOVİES SCREEN
import AladdinScreen from './screens/SpecialScreensVRMovies/AladdinScreen';
import ArabianNightsScreen from './screens/SpecialScreensVRMovies/ArabianNightsScreen';
import AztecScreen from './screens/SpecialScreensVRMovies/AztecScreen';
import CosmicFightersScreen from './screens/SpecialScreensVRMovies/CosmicFightersScreen';
import DinoCoasterScreen from './screens/SpecialScreensVRMovies/DinoCoasterScreen';
import DystopiaScreen from './screens/SpecialScreensVRMovies/DystopiaScreen';
import EscapeScreen from './screens/SpecialScreensVRMovies/EscapeScreen';
import FlyBikeScreen from './screens/SpecialScreensVRMovies/FlyBikeScreen';
import FollowScreen from './screens/SpecialScreensVRMovies/FollowScreen';
import InfernoScreen from './screens/SpecialScreensVRMovies/InfernoScreen';
import IslandCoasterVRScreen from './screens/SpecialScreensVRMovies/IslandCoasterVRScreen';
import MeetScreen from './screens/SpecialScreensVRMovies/MeetScreen';
import MissionMarsScreen from './screens/SpecialScreensVRMovies/MissionMarsScreen';
import Motoride1Screen from './screens/SpecialScreensVRMovies/Motoride1Screen';
import Motoride2Screen from './screens/SpecialScreensVRMovies/Motoride2Screen';
import NightwishScreen from './screens/SpecialScreensVRMovies/NightwishScreen';
import PeterpanScreen from './screens/SpecialScreensVRMovies/PeterpanScreen';
import PinocchioScreen from './screens/SpecialScreensVRMovies/PinocchioScreen';
import PlanetScreen from './screens/SpecialScreensVRMovies/PlanetScreen';
import WallofChinaVRScreen from './screens/SpecialScreensVRMovies/WallofChinaVRScreen';
import WastelandScreen from './screens/SpecialScreensVRMovies/WastelandScreen';

//DOME MOVİES SCREEN
import AfricaScreen from './screens/SpecialScreensDomeMovies/AfricaScreen';
import EscapeDomeScreen from './screens/SpecialScreensDomeMovies/EscapeDomeScreen';
import FollowDomeScreen from './screens/SpecialScreensDomeMovies/FollowDomeScreen';
import IslandCoasterDomeScrenn from './screens/SpecialScreensDomeMovies/IslandCoasterDomeScrenn';
import MeetDomeScreen from './screens/SpecialScreensDomeMovies/MeetDomeScreen';
import MissionMarsDomeScreen from './screens/SpecialScreensDomeMovies/MissionMarsDomeScreen';
import WallofChinaDomeScreen from './screens/SpecialScreensDomeMovies/WallofChinaDomeScreen';

//Innovation MOVİES SCREEN
import AGV_Screen from './screens/SpecialScreensInnovation/AGV_Screen';

//Hakkimizda Odul Screen
import HakkimizdaOdulScreens1 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens1';
import HakkimizdaOdulScreens2 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens2';
import HakkimizdaOdulScreens3 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens3';
import HakkimizdaOdulScreens4 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens4';
import HakkimizdaOdulScreens5 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens5';
import HakkimizdaOdulScreens6 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens6';
import HakkimizdaOdulScreens7 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens7';
import HakkimizdaOdulScreens8 from './screens/HakkimizdaOdulScreens/HakkimizdaOdulScreens8';






const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Ödüller" component={Oduller} />
        <Stack.Screen name="Referanslar" component={Referanslar} />
        <Stack.Screen name="Hakkimizda" component={Hakkimizda} />
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="Entertainment" component={EntertainmentScreen} />
        <Stack.Screen name="FlatMovies" component={FlatMoviesScreen} />
        <Stack.Screen name="VRMovies" component={VRmoviesScreen} />
        <Stack.Screen name="DomeMovies" component={DomeMoviesScreen} />
        <Stack.Screen name="Innovation" component={InnovationScreen} />
        <Stack.Screen name="Atlantis" component={AtlantisScreen}/>
        <Stack.Screen name="DarkRide" component={DarkRideScreen}/>
        <Stack.Screen name="Defender" component={DefenderScreen}/>
        <Stack.Screen name="FlyingL" component={FlyingTheataerLScreen}/>
        <Stack.Screen name="FlyingM" component={FlyingTheataerMScreen}/>
        <Stack.Screen name="Hurricane" component={HurricaneScreen}/>
        <Stack.Screen name="SpaceDigitalPark" component={MissionSpaceDigitalParkScreen}/>
        <Stack.Screen name="MonsterJam" component={MonsterJamScreen}/>
        <Stack.Screen name="Nautilus" component={NautilusScreen}/>
        <Stack.Screen name="Riot360" component={Riot360Screen}/>
        <Stack.Screen name="Riot" component={RiotScreen}/>
        <Stack.Screen name="Supernova" component={SupernovaScreen} />
        <Stack.Screen name="XdTheater" component={XdTheaterScreen}/>

        <Stack.Screen name="Aerobatics" component={AerobaticsScreen}/>
        <Stack.Screen name="AstroCops" component={AstroCopsScreen}/>
        <Stack.Screen name="CappadociaCoaster" component={CappadociaCoasterScreen}/>
        <Stack.Screen name="DinoIsland" component={DinoIslandScreen}/>
        <Stack.Screen name="FutureBike" component={FutureBikeScreen}/>
        <Stack.Screen name="HotPursie1" component={HotPursuit1Screen}/>
        <Stack.Screen name="HotPursie2" component={HotPursuit2Screen}/>
        <Stack.Screen name="HumanBody" component={HumanBodyScreen}/>
        <Stack.Screen name="IceWorld" component={IceWorldScreen}/>
        <Stack.Screen name="IslandCoaster" component={IslandCoasterScreen}/>
        <Stack.Screen name="LostWorld" component={LostWorldScreen}/>
        <Stack.Screen name="MagicWorld" component={MagicWorldScreen}/>
        <Stack.Screen name="Penguins" component={PenguinsScreen}/>
        <Stack.Screen name="RedLine" component={RedlineScreen}/>
        <Stack.Screen name="SpaceRace" component={SpaceRaceScreen}/>
        <Stack.Screen name="UludagSnowboard" component={UludagSnowboardScreen}/>
        <Stack.Screen name="WalloFChina" component={WallofChinaScreen}/>

        <Stack.Screen name="Aladdin" component={AladdinScreen}/>
        <Stack.Screen name="ArabianNights" component={ArabianNightsScreen}/>
        <Stack.Screen name="Aztec" component={AztecScreen}/>
        <Stack.Screen name="CosmicFighters" component={CosmicFightersScreen}/>
        <Stack.Screen name="DinoCoaster" component={DinoCoasterScreen}/>
        <Stack.Screen name="Dystopia" component={DystopiaScreen}/>
        <Stack.Screen name="Escape" component={EscapeScreen}/>
        <Stack.Screen name="FlyBike" component={FlyBikeScreen}/>
        <Stack.Screen name="Follow" component={FollowScreen}/>
        <Stack.Screen name="Inferno" component={InfernoScreen}/>
        <Stack.Screen name="IslandCoasterVR" component={IslandCoasterVRScreen}/>
        <Stack.Screen name="Meet" component={MeetScreen}/>
        <Stack.Screen name="MissionMars" component={MissionMarsScreen}/>
        <Stack.Screen name="Motoride1" component={Motoride1Screen}/>
        <Stack.Screen name="Motoride2" component={Motoride2Screen}/>
        <Stack.Screen name="Nigthwish" component={NightwishScreen}/>
        <Stack.Screen name="Peterpan" component={PeterpanScreen}/>
        <Stack.Screen name="Pinocchio" component={PinocchioScreen}/>
        <Stack.Screen name="Planet" component={PlanetScreen}/>
        <Stack.Screen name="WalloFChinaVR" component={WallofChinaVRScreen}/>
        <Stack.Screen name="Wasteland" component={WastelandScreen}/>

        <Stack.Screen name="Africa" component={AfricaScreen}/>
        <Stack.Screen name="EscapeDome" component={EscapeDomeScreen}/>
        <Stack.Screen name="FollowDome" component={FollowDomeScreen}/>
        <Stack.Screen name="IslandCoasterDome" component={IslandCoasterDomeScrenn}/>
        <Stack.Screen name="MeetDome" component={MeetDomeScreen}/>
        <Stack.Screen name="MissionMarsDome" component={MissionMarsDomeScreen}/>
        <Stack.Screen name="WallofChinaDome" component={WallofChinaDomeScreen}/>

        <Stack.Screen name="AGV" component={AGV_Screen}/>

        <Stack.Screen name="HakkimizdaOdul1" component={HakkimizdaOdulScreens1}/>
        <Stack.Screen name="HakkimizdaOdul2" component={HakkimizdaOdulScreens2}/>
        <Stack.Screen name="HakkimizdaOdul3" component={HakkimizdaOdulScreens3}/>
        <Stack.Screen name="HakkimizdaOdul4" component={HakkimizdaOdulScreens4}/>
        <Stack.Screen name="HakkimizdaOdul5" component={HakkimizdaOdulScreens5}/>
        <Stack.Screen name="HakkimizdaOdul6" component={HakkimizdaOdulScreens6}/>
        <Stack.Screen name="HakkimizdaOdul7" component={HakkimizdaOdulScreens7}/>
        <Stack.Screen name="HakkimizdaOdul8" component={HakkimizdaOdulScreens8}/>





 


        



      </Stack.Navigator>
    </NavigationContainer>
  );
}
