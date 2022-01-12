import React from 'react';

import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...base_style,
    container: {
      backgroundColor: colors.darkgreen,
      ...base_style.container,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      backgroundColor: 'white',
      borderColor: colors.darkgreen,
      borderWidth: 1,
      ...base_style.container,
    },
    title: {
      color: colors.darkgreen,
      ...base_style.title,
    },
  }),
});
