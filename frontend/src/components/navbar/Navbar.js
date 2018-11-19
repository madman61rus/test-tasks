//@flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import type {Props} from './types';
import {styles} from './styles';

const Navbar = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.leftComponentAction}>{props.leftComponent}</TouchableOpacity>
      <Text style={styles.titleText}>{props.title}</Text>
      <TouchableOpacity onPress={props.rightComponentAction}>
        {props.rightComponent}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
