import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import envs from '../../config/env';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Products = ({navigation}) => {
  // console.log(envs);
  const {API_URL} = envs;
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const {loading, data, error} = useFetch(API_URL);
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
