import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../components/CardScreenTypes/Card'

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Card
        title = "arif ışık"
        text = "uzaylılar kaçırdı"
        image = "https://dofrobotics.com/storage/thumbnails/avatars/JqRdkVBWabRN2IWe4e0Ub1gXq2UcBHcgulgI48Cm.webp"
      />

      <Card
        title = "Ahmet Şimşek"
        text = "merhaba"
      />

      <Card
        title = "Eddard STARK"
        text = "WİNTER İS COMİNG"
      />

      <Card
        title = "Kemal stark"
        text = "WİNTER İS not COMİNG"
      />

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
})

export default Products; // 💡 Bileşeni dışa aktarmayı unutma!