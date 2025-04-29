import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from './components/card';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: 'Camisa Polo', price: 'R$ 99,90', image: 'https://images.tcdn.com.br/img/img_prod/809258/camisa_polo_masculina_piquet_manga_curta_azul_royal_409_1_62c15740b4b6cc04dbfd8e56a62c10fc.jpg' },
  { id: 2, name: 'Tênis Esportivo', price: 'R$ 199,90', image: 'https://azenstore.com.br/cdn/shop/files/tenis-masculino-esportivo-blaze-boost-azenstore-694254.webp?v=1706135149' },
  { id: 3, name: 'Calça Jeans', price: 'R$ 129,90', image: 'https://lojalevis.vtexassets.com/arquivos/ids/572780-752-752?v=638812085531470000&width=752&height=752&aspect=true' },
  { id: 4, name: 'Jaqueta Couro', price: 'R$ 249,90', image: 'https://www.omk.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/a/jaqueta-couro-omk-elysee-1.jpg' },
  { id: 5, name: 'Relógio Digital', price: 'R$ 159,90', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQC1c60oAvXbfD7ms9cEecEFV4ojBgCeSDsKi8-WUPPzmcgI9n67DJMtw8KhUoQQBV9uS5McWzN-QxaGtPO0rTM4l4F4_2Z771XjCgWF3KqRKIt7yGJHD1l5fw' },
  { id: 6, name: 'Óculos de Sol', price: 'R$ 89,90', image: 'data:image/jpeg;base64,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' },
];


const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
});
