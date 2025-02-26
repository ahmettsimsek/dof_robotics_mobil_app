import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Dashboard({ route, navigation }) {
  const { userName } = route.params || { userName: 'Kullanıcı' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldin, {userName}!</Text>

      <Button 
        style = { styles.GeriButon}
        title="Go Back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  GeriButon: {
    justifyContent: 'center',
    marginTop: -2000
    
  },
});

