import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {Icon} from 'native-base';
import styles from './styles';

const IconComponent = ({
  color = '',
  component,
  containerStyle = {},
  disabled = false,
  name,
  onPress,
  resizeMode = 'contain',
  size = 20,
  source,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}
      disabled={onPress && !disabled ? false : true}>
      {source && (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={[{height: 60, width: 60}, containerStyle]}
        />
      )}
      {component
        ? component
        : name && (
            <Icon
              type="MaterialCommunityIcons"
              name={name}
              size={size}
              color={color}
            />
          )}
    </TouchableOpacity>
  );
};

export default IconComponent;
