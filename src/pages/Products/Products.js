import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import envs from '../../config/env';

import ProductCard from '../../components/ProductCard';

const Products = () => {
  // console.log(envs);
  const {API_URL} = envs;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(API_URL);
      setData(productData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const renderProduct = ({item}) => <ProductCard product={item} />;
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
