import React, { useState } from 'react';
import { FlatList, Image, Button, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const obterFotosGatos = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_IB4ZfTyrMbyAJA6tCKuQAjR15ycCacnZKbrJgINZtR1Kon0ouSNe2I95gvwGJQ6t');
      const json = await response.json();
      setData((prevData) => [...prevData, ...json]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Este site mostra fotos de gatos</Text>
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
    backgroundColor: '#f8f9fa',
    padding: 16,
    alignItems: 'center',
    height: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
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
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});



