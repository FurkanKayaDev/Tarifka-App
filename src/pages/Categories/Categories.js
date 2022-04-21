import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import CategoryCard from '../../components/Cards/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { API_CATEGORY } from '../../APIs';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
])

function Categories({ navigation }) {
  const { loading, error, data } = useFetch(`${API_CATEGORY}`);

  const handleProductSelect = strCategory => {
    navigation.navigate('Meals', { strCategory });
  }

  const renderProduct = ({ item }) => (
    <CategoryCard product={item} onSelect={() => handleProductSelect(item.strCategory)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />
  }

  return (
    <View style={{ backgroundColor: 'orange' }}>
      <FlatList keyExtractor={data => data.idCategory} data={data.categories} renderItem={renderProduct} />
    </View>
  )
}

export default Categories