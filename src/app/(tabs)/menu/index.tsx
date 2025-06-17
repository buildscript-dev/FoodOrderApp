import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable } from 'react-native';
import products from '@assets/data/products'
import { Link } from 'expo-router';

const product = products[0];

const ProductListItem = ({ product}: {product: any}) =>{

  return(
<Link href={`/menu/${product.id}`} asChild>
<Pressable style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
 </Link>
  );
}
export default function TabOneScreen() {
  return (

// <ProductListItem product={products[0]}/>
// <ProductListItem product={products[1]}/>
// <ProductListItem product={products[2]}/>
// <ProductListItem product={products[3]}/>
// <ProductListItem product={products[4]}/>
// <ProductListItem product={products[5]}/>
// <ProductListItem product={products[6]}/>
// <ProductListItem product={products[7]}/>
// <ProductListItem product={products[8]}/>
// <ProductListItem product={products[9]}/>
<FlatList
data={products}
renderItem={({item}) => <ProductListItem product={item}/>}
numColumns={2}
contentContainerStyle={{gap: 10, padding: 10}}
columnWrapperStyle={{gap: 10}}
 /> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  price: {
    fontSize: 18,
    color: 'blue',
  },
});
