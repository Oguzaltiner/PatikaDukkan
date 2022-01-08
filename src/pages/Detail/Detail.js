import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Detail.style';
import envs from '../../config/env';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
//stack yapısı altında olduğu için route ile parametleri alıyoruz
const Detail = ({route}) => {
  const {id} = route.params;
  const {API_URL} = envs;
  console.log(API_URL+"/"+id);
  const {loading,error,data} = useFetch(API_PRODUCT_URL+"/"+id);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:data.image}}/>
      <View style={styles.body_container} >
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
