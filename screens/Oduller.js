import React, { useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

function Oduller() {
  // Otomatik kaydırma için ScrollView referansı ve konum bilgisi
  const scrollViewRef = useRef(null);
  const scrollOffsetRef = useRef(0);
  const windowWidth = Dimensions.get('window').width;

  // Otomatik kayan resimler için örnek URL'ler (kendi resimlerinizi kullanabilirsiniz)
  const scrollImages = [
    "https://dofrobotics.com/wp-content/uploads/2025/02/GoldenPony-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/IAAPA_Bras_Ring-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/Shining_Star-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/CES-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/IAAPA_Bras_Ring2022-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/BLOOLOOP-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/Deloitte-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/Deloitte2024-2.png",
    "https://dofrobotics.com/wp-content/uploads/2025/02/IAAPA_Best_Exhibit2024-2.png",
  ];

  // Her bir resmin kapladığı alan (örneğin, resim genişliği + margin)
  const ITEM_WIDTH = 200;
  const totalContentWidth = scrollImages.length * ITEM_WIDTH;

  // Otomatik kaydırma ayarları
  const AUTO_SCROLL_INTERVAL = 100; // ms cinsinden aralık
  const AUTO_SCROLL_STEP = 2; // her adımda kaydırılacak piksel

  useEffect(() => {
    const interval = setInterval(() => {
      let newScrollX = scrollOffsetRef.current + AUTO_SCROLL_STEP;
      // Eğer son resme geldiysek, başa dön
      if (newScrollX > totalContentWidth - windowWidth) {
        newScrollX = 0;
      }
      scrollOffsetRef.current = newScrollX;
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: newScrollX, animated: true });
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [totalContentWidth, windowWidth]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Ödüller</Text>

      <View style={styles.view1}>
        <Image
          source={{ uri: "https://dofrobotics.com/wp-content/uploads/2025/01/IMG_4301-2048x1366.jpg" }}
          style={styles.image1}
        />
      </View>

      <View style={styles.view2}>
        <Text style={styles.text3}>Yakından bakın</Text>
      </View>

      {/* Otomatik kayan resimler */}
      <ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {scrollImages.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.scrollImage}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

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
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: 420,
    height: 320,
  },
  scrollView: {
    marginTop: 50,
  },
  scrollImage: {
    width: 250,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  view2: {
    alignItems: 'center',
    marginTop: 50,
  },
  text3: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default Oduller;
