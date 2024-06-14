import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = ({ onSearch, items }) => {
  return (
    <View style={styles.contenedorEncabezado}>
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorEncabezado: {
    marginTop: 30,
    marginBottom: 10,
  },
});

export default Encabezado;