import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import Icon from '../Icon';

const Button = ({text = '', onPress = () => {}}) => (
  <TouchableOpacity
    style={{
      height: 40,
      backgroundColor: 'red',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 20,
      borderRadius: 5,
    }}
    onPress={onPress}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
