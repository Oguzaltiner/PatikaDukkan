import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import styles from './Sign.style';
import Button from '../../components/Button';
import {Form, Formik} from 'formik';

import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {showMessage} from 'react-native-flash-message';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};
const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    navigation.goBack();
  }
  function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: 'şifreler uyuşmuyor',
        type: 'danger',
      });
      setLoading(false);
    }
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
              isSecure
            />
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz"
            />
            <Button text="Giriş Yap" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button thema="secondary" text="Geri" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default Sign;
