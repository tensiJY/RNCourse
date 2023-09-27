import React from 'react';

import {Pressable, View, StyleSheet} from 'react-native';
import VectorIcon from './VectorIcon';

const VectorIconButton = ({name, size, color, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => {
        return pressed && styles.pressed;
      }}
      onPress={onPress}>
      <View style={styles.container}>
        <VectorIcon name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default VectorIconButton;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 8,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
