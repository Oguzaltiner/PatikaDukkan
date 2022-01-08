import React from 'react';

import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import envs from '../../config/env';

import usePost from '../../hooks/usePost';
import {Formik} from 'formik';
import styles from './Login.style';
const Login = ({navigation}) => {
  const {API_AUTH_URL} = envs;
  const {data, loading, error, post} = usePost();
  function handleLogin(values) {
    post(API_AUTH_URL + '/login',values);
  }
  if (error) {
    Alert.alert('Dükkan', 'kullanıcı bulunamadı');
  }
  if (data) {
    if(data.status ==='Error'){
    Alert.alert('Dükkan', 'kullanıcı bulunamadı');
    }
    else{
        navigation.navigate('ProductsPage');
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
