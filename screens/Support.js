import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const imageData = [
  { id: '1', imageUrl: require('../assets/image/image1.png'), title: 'Mustafa Mertcan' }, // Yerel resim
  { id: '2', imageUrl: require('../assets/image/image2.png'), title: 'Burak Haciosmanoğlu' }, // İnternet resmi
  { id: '3', imageUrl: require('../assets/image/image3.png'), title: 'Bakıt Baydaliev' },
];

export default function Support() {
  return (
    <FlatList
      data={imageData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* Yerel dosya için require, URL için uri kullanıyoruz */}
          <Image
            source={typeof item.imageUrl === 'string' && item.imageUrl.startsWith('http') ? { uri: item.imageUrl } : item.imageUrl}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
 
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    width: 350,
    height: 230,
    borderRadius: 100,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
