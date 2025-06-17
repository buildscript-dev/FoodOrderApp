import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductListDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{color: 'white', textAlign: 'center',}}>ProductListDetail for id : {id}</Text>
    </View>
  )
}

export default ProductListDetail