import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  // URL estática de la imagen del logo
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'; // Reemplaza con la URL de tu imagen de logo

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 300, // Ancho de la imagen del logo
    height: 100, // Altura de la imagen del logo
  },
});

export default Logo;
