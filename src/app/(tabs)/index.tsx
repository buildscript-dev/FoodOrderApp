import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import products from '@assets/data/products'

const product = products[0];

const ProductListItem = ({ product}: {product: any}) =>{

  return(
 <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}
export default function TabOneScreen() {
  return (
   <ScrollView>
<ProductListItem product={products[0]}/>
<ProductListItem product={products[1]}/>
<ProductListItem product={products[2]}/>
<ProductListItem product={products[3]}/>
<ProductListItem product={products[4]}/>
<ProductListItem product={products[5]}/>
<ProductListItem product={products[6]}/>
<ProductListItem product={products[7]}/>
<ProductListItem product={products[8]}/>
<ProductListItem product={products[9]}/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  image: {
    width: "100%",
    height: 400,
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
