import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {Item, Input, Label, Icon} from 'native-base';

const Header = ({
  label = '',
  value = null,
  onChangeText = () => {},
  onSubmitEditing = () => {},
  icon = false,
  iconPress = () => {},
  iconName = '',
  editable = true,
  ...rest
}) => (
  <Item
    floatingLabel
    style={{
      width: '100%',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginRight: 0,
    }}>
    <Label>{label}</Label>
    <Input
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      editable={editable}
      {...rest}
    />
    {!!icon && (
      <Icon onPress={iconPress} type="MaterialCommunityIcons" name={iconName} />
    )}
  </Item>
);

export default Header;
