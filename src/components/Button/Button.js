import React from 'react';
import {TextInput, View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
