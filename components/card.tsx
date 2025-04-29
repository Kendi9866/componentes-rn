import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  const handleBuy = () => {
    Alert.alert(`Produto ${name} comprado!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Button title="Comprar" onPress={handleBuy} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});