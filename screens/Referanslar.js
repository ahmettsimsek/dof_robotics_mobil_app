import React, { useRef, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Referanslar_data from '../components/CardScreenSpecial/Referanslar_data.json';
import Referanslar2_data from '../components/CardScreenSpecial/Referanslar2_data.json';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Ekran genişliği

function Referanslar() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const ITEM_WIDTH = 350 + 40; // Image width + margin

  // Kaydırma durumunu kaydetmek için currentIndex state'i
  const [currentIndex, setCurrentIndex] = useState(0);

  // FlatList yeniden render edilmeden aynı pozisyonda kalması için
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: currentIndex * ITEM_WIDTH, animated: false });
    }
  }, [currentIndex]);

  // Sağ oka tıklandığında yatay kaydırma
  const scrollRight = () => {
    const nextIndex = currentIndex + 1;
    const maxIndex = Referanslar2_data.length - 1;
    if (nextIndex <= maxIndex) {
      flatListRef.current.scrollToOffset({ offset: nextIndex * ITEM_WIDTH, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  // Sol oka tıklandığında yatay kaydırma
  const scrollLeft = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      flatListRef.current.scrollToOffset({ offset: nextIndex * ITEM_WIDTH, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Referanslar</Text>

      <FlatList
        data={Referanslar_data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.circularImage} />
          </View>
        )}
        keyExtractor={item => item.u_id.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatList}
      />

      <Text style={styles.horizontalTitle}>Hakkımızda Geri Bildirimler</Text>
      <View style={styles.horizontalContainer}>
        <TouchableOpacity onPress={scrollLeft} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={Referanslar2_data}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.horizontalCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.horizontalImage} />
            </View>
          )}
          keyExtractor={item => item.u_id.toString()}
          contentContainerStyle={{
            paddingHorizontal: (width - ITEM_WIDTH) / 2, // Resimleri ortalamak için
          }}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const newIndex = Math.round(offsetX / ITEM_WIDTH);
            setCurrentIndex(newIndex);
          }}
          snapToAlignment="center"
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
        />

        <TouchableOpacity onPress={scrollRight} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>
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
  horizontalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 25,
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontalList: {
    paddingHorizontal: 15,
  },
  horizontalCard: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  horizontalImage: {
    width: 350,
    height: 180,
    borderRadius: 40,
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
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default Referanslar;
