import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import Icon from '../Icon';

const Header = ({
  color,
  headerStyle = {},
  headerTitleStyle,
  leftIconColor = 'white',
  leftIconName,
  onPressLeftIcon = () => {},
  onPressRightIcon = () => {},
  rightComponent,
  rightIconColor = 'white',
  rightIconName,
  title = '',
}) => (
  <View style={[styles.itemConatiner, {backgroundColor: color}, headerStyle]}>
    {leftIconName && (
      <Icon
        name={leftIconName}
        style={{marginHorizontal: 0}}
        color={leftIconColor}
        onPress={onPressLeftIcon}
      />
    )}

    {!!title && (
      <Text
        style={[
          {
            flex: 1,
            color: 'white',
            marginHorizontal: 10,
          },
          !leftIconName && !rightIconName && {textAlign: 'center'},
          headerTitleStyle,
          ,
        ]}>
        {title}
      </Text>
    )}

    {rightIconName && (
      <Icon
        name={rightIconName}
        color={rightIconColor}
        style={{marginHorizontal: 0}}
        onPress={onPressRightIcon}
      />
    )}
    {rightComponent && rightComponent()}
  </View>
);

export default Header;
