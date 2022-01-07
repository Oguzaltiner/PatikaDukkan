import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import envs from '../../config/env';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Error from '../../components/Error';
import Loading from '../../components/Loading';


const Products = () => {
  // console.log(envs);
  const {API_URL} = envs;
  
  const{loading,data,error}  = useFetch(API_URL);
  const renderProduct = ({item}) => <ProductCard product={item} />;
  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error/>
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
