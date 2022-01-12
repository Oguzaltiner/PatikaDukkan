import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import styles from './Login.style';
import Button from '../../components/Button';
import {Formik} from 'formik';

import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

import { showMessage } from 'react-native-flash-message';
const initialFormValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  async function handleFormSubmit(formValues) {
    try {
        setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
        setLoading(false);
    } catch (error) {
        console.log(error);
        showMessage({
            message:authErrorMessageParser(error.code),
            type:'dander',
        });
        setLoading(false);
    }
  }
  function handleSignUp() {
    navigation.navigate('SignPage');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne ?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="E-postanızı giriniz"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifrenizi giriniz"
            />
            <Button text="Giriş  Yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button thema="secondary" text="Kayıt Ol" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;
