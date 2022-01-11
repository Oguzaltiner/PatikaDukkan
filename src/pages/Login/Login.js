import React from 'react';

import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import envs from '../../config/env';

import {useDispatch} from 'react-redux';

import usePost from '../../hooks/usePost';
import {Formik} from 'formik';
import styles from './Login.style';

const Login = ({navigation}) => {
  const {API_AUTH_URL} = envs;
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();
  function handleLogin(values) {
    post(API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('Dükkan', 'kullanıcı bulunamadı');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'kullanıcı bulunamadı');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
      // navigation.navigate('ProductsPage');
    }
    console.log(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              value={values.username}
              iconName="account"
              onType={handleChange('username')}
              placeholder="Kullanıcı adını giriniz..."
            />
            <Input
              value={values.password}
              isSecure
              iconName="key"
              onType={handleChange('password')}
              placeholder="Şifrenizi giriniz.."
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
