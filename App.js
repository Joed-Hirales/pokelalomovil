import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

import Encabezado from './Components/JavaScript/Encabezado';
import PokemonCard from './Components/JavaScript/PokemonCard';
import Buscador from './Components/JavaScript/Buscador';
import Logo from './Components/JavaScript/Logo';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  const handleSearch = () => {
    const searchTerm = inputSearch;
    if (searchTerm === '') {
      setPokemonList(data.results);
    } else {
      const filteredPokemon = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPokemonList(filteredPokemon);
    }
  };

  return (
    <View style={styles.container}>
      <Encabezado onSearch={handleSearch} items={pokemonList} />
      <Logo />
      <Buscador onSearch={handleSearch} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
            style={styles.pokemonCard}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2B53',
  },
  contenedorEncabezado: {
    marginTop: 30,
    marginBottom: 10,
  },
  contenedorBuscador: {
    marginBottom: 10,
  },
  contenedorPokemon: {
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollViewContent: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingBottom: 2000,
  },
  pokemonCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default App;
