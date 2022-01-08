import React from 'react'
import {  TextInput,View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Button.style';

const Button = ({text,onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}> 
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );
}



export default Button;