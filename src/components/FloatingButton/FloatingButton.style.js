import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgreen,
    borderRadius:50,
    justifyContent: 'center',
    alignContent:'center',
    position:'absolute',
    bottom:20,
    right:20,
    borderRadius:50,
    width:60,
    height:60
  },
  icon:{
    flex:1,
  }
});
