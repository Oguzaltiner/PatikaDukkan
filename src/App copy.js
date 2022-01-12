import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import database from '@react-native-firebase/database';
const App = () => {
  const checkDb = () => {
    const referance = database().ref();
    referance.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDb = () => {
    const referance = database().ref();
    referance.on('value', snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const setDb = () => {
    const referance = database().ref('car/rentable');
    referance.set({brand: 'audi', color: 'blue', price: 2500});
  };
  return (
    <SafeAreaView>
      <Text> fİREBASE </Text>
      <Button title="Check Db" onPress={checkDb} />
      <Button title="test Db" onPress={listenDb} />
      <Button title="set Db" onPress={setDb} />
    </SafeAreaView>
  );
};

export default App;
