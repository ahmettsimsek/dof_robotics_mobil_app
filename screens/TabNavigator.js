import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import AboutScreen from './AboutScreen';
import Services from './Services';
import Products from './Products';
import Settings from './Settings'
import Support from './Support';
import Contact from './Contact';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    screenOptions={({ route }) => ({
      drawerIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Ana Sayfa') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Hakkımızda') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        } else if (route.name === 'Ürünler') {
          iconName = focused ? 'briefcase' : 'briefcase-outline';
        } else if (route.name === 'İletişim') {
          iconName = focused ? 'mail' : 'mail-outline';
        } else if (route.name === 'ROI') {
          iconName = focused ? 'help' : 'help-outline';
        } else if (route.name === 'Hesap Ayarları') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: '#00bfff',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        headerShown: true, // Üst başlığı göster
      })}
    >
      <Drawer.Screen name="Ana Sayfa" component={Dashboard} />
      <Drawer.Screen name="Hakkımızda" component={AboutScreen} />
      <Drawer.Screen name="Ürünler" component={Services} />
      <Drawer.Screen name="İletişim" component={Contact} />
      <Drawer.Screen name="ROI" component={Support} />
      <Drawer.Screen name="Hesap Ayarları" component={Settings} />


    </Drawer.Navigator>
    );
}
