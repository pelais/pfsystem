import React from 'react';
import { Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  welcome: {
    color: '#030303',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{ uri: 'https://github.com/pfsystem/pfsystem/blob/master/background.png'  }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
  </ImageBackground>
);

export default Main;
