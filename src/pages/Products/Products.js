import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import envs from '../../config/env';

import ProductCard from '../../components/ProductCard';
import CategoryCard from '../../components/CategoryCard';

import useFetch from '../../hooks/useFetch/useFetch';

import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Products = ({navigation}) => {
  // console.log(envs);
  const {API_URL} = envs;
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const handleCategorySelect = item => {
    const newData = data.filter(f => f.category == item);
    setNewData(newData);
  };
  const {loading, data, error} = useFetch(API_URL);
  const [categoryList, setCategoryList] = useState([]);
  const [newData, setNewData] = useState([]);
  const fetchCategoryData = async () => {
    try {
      const {data: responseCategoryData} = await axios.get(
        API_URL + '/categories',
      );
      setCategoryList(responseCategoryData);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  const renderCategory = ({item}) => (
    <CategoryCard category={item} onSelect={() => handleCategorySelect(item)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView>
      <FlatList
        style={styles.categoryList}
        numColumns={3}
        contentContainerStyle={{paddingTop: 5, paddingBottom: 10}}
        data={categoryList}
        renderItem={renderCategory}
      />
      <FlatList
        data={newData == '' ? data : newData}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth:1,
    margin:3,
    borderRadius:15,
  },
});
