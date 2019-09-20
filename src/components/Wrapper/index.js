/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height} = Dimensions.get('window');

import {Icon} from 'native-base';

let STATUSBAR_HEIGHT = StatusBar.currentHeight;

const ScreenHOC = ({
  background = null,
  barStyle = 'light-content',
  children,
  title,
  containerStyle = {},
  onBackPress = () => {},
  safeAreaView = true,
  statusbar = true,
  statusBarPadding = false,
  parentContainerStyle = {},
  scroll = false,
}) => {
  const renderChild = () => (
    <View
      style={[
        {flex: 1},
        statusBarPadding && {
          paddingTop: STATUSBAR_HEIGHT,
        },
        parentContainerStyle,
      ]}
      source={background}>
      {!statusBarPadding && (
        <StatusBar
          backgroundColor={'transparent'}
          hidden={!statusbar}
          translucent
          barStyle={barStyle}
        />
      )}

      {title && (
        <View
          style={{
            width: '100%',
            height: 32,
            paddingHorizontal: 10,
            marginVertical: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{alignItems: 'center', flexDirection: 'row'}}
            onPress={onBackPress}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{'<'}</Text>
            <Text style={{}}>{` ${title}`}</Text>
          </TouchableOpacity>
        </View>
      )}

      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{
            minHeight: height - STATUSBAR_HEIGHT - 52,
            alignItems: 'center',
          }}
          style={[
            {
              flex: 1,
              backgroundColor: background ? 'transparent' : 'white',
            },
            containerStyle,
          ]}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            {
              flex: 1,
              backgroundColor: background ? 'transparent' : 'white',
              alignItems: 'center',
            },
            containerStyle,
          ]}>
          {children}
        </View>
      )}
    </View>
  );

  return safeAreaView ? (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}>
      {renderChild()}
    </SafeAreaView>
  ) : (
    renderChild()
  );
};

export default ScreenHOC;
