import React, { useState } from 'react';
import { FlatList, Image, Button, View, StyleSheet } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const obterFotosGatos = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
      const json = await response.json();
      setData((prevData) => [...prevData, ...json]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
            />
          </View>
        )}
      />
      <Button title="Carregar 5 fotos de gatos" onPress={obterFotosGatos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  imageContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});



