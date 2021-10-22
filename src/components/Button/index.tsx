import React from 'react';

import { ColorValue, Text, TouchableOpacity } from 'react-native';
import { TouchableProps } from 'react-native-svg';

import { styles } from './styles';

type Props = TouchableProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
}

export function Button({ color, title, backgroundColor, ...rest }: Props){
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]}
      {...rest}
    >
      <Text style={[styles.title, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}