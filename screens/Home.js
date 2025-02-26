import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  ScrollView, Keyboard, TouchableWithoutFeedback 
} from 'react-native';

export default function Home({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        
        {/* Üst Panel */}
        <View style={styles.panel}>
          <Text style={styles.headerText}>Dof Robotics</Text>
        </View>

        <View style={styles.subHeader} />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Merhaba, Giriş Yapınız</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="İsim giriniz" 
            value={name} 
            onChangeText={setName} 
          />

          <TextInput 
            style={styles.input} 
            placeholder="Email giriniz" 
            value={email} 
            onChangeText={setEmail} 
            keyboardType="email-address"
          />

          <TextInput 
            style={styles.input} 
            placeholder="Şifre giriniz" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry
          />

          {/* Güncellendi: Dashboard yerine MainTabs'a git */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('MainTabs', { userName: name })}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  panel: {
    width: '100%',
    padding: 20,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subHeader: {
    flex: 0.08,
    width: '100%',
    backgroundColor: '#ff1493',
  },
  welcomeContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00bfff',
  },
  form: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 19,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
