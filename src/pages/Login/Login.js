import React from 'react';

import {SafeAreaView, Text, View, TextInput, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Formik} from 'formik';
import styles from './Login.style';
const Login = () => {
    function handleLogin(values){
        console.log(values);
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik initialValues={{username:'',password:''}} 
      onSubmit={handleLogin}>
        {({handleSubmit,handleChange,values}) => (
          <View style={styles.body_container}>
            <Input value={values.username} iconName="account" onType={handleChange('username')} placeholder="Kullanıcı adını giriniz..." />
            <Input value={values.password} isSecure iconName="key"  onType={handleChange('password')} placeholder="Şifrenizi giriniz.." />
            <Button text="Giriş Yap"  onPress={handleSubmit}/>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;
