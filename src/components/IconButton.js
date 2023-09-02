import * as React from 'react';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function IconButton({name, color, onPress, size}) {
  console.log(name, color, size);
  return (
    <Icon
      name={name}
      color={color}
      onPress={onPress ? onPress : null}
      size={size}
      //backgroundColor="black"
    />
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
