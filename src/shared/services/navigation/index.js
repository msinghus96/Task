/* eslint-disable react-native/no-inline-styles */
import {Image, Animated, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradinet from 'react-native-linear-gradient';
import {Icon} from 'native-base';
import {IMAGES} from '../../constants/images';

import {createAppContainer} from 'react-navigation';

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

import {
  CALENDAR,
  CLASSES,
  EDIT_PROFILE,
  FEED,
  MESSAGING,
  PROFILE,
  STUDIO,
  TEAMS,
} from '../../../screen';

import {SCREEN} from '../../constants';

// Top bar used in studio screen
export const Top_Bar = createMaterialTopTabNavigator(
  {
    Classes: CLASSES,
    Teams: TEAMS,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(10,10,10,0.1)',
        elevation: 0,
      },
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      indicatorStyle: {
        backgroundColor: 'blue',
        elevation: 0,
      },
      upperCaseLabel: false,
    },
    animationEnabled: true,
    swipeEnabled: true,
  },
);

export const Profile_Top_Tab = createAppContainer(Top_Bar);

const bottomTab = createBottomTabNavigator(
  {
    [SCREEN.BOTTOM_TAB.FEED]: {
      screen: FEED,
      params: {
        title: 'Feed',
        iconType: 'FontAwesome',
        iconName: 'feed',
        image: '',
        enlarge: false,
      },
    },
    [SCREEN.BOTTOM_TAB.CALENDAR]: {
      screen: CALENDAR,
      params: {
        title: 'Calendar',
        iconType: 'FontAwesome5',
        iconName: 'calendar',
        image: '',
        enlarge: false,
      },
    },
    [SCREEN.BOTTOM_TAB.STUDIO]: {
      screen: STUDIO,
      params: {
        title: 'Studio',
        iconType: '',
        iconName: '',
        image: IMAGES.STUDIO,
        enlarge: true,
      },
    },
    [SCREEN.BOTTOM_TAB.MESSAGING]: {
      screen: MESSAGING,
      params: {
        title: 'Messaging',
        iconType: 'Feather',
        iconName: 'message-square',
        image: '',
        enlarge: false,
        badge: 7,
      },
    },
    [SCREEN.BOTTOM_TAB.PROFILE]: {
      screen: PROFILE,
      params: {
        title: 'Profile',
        iconType: 'FontAwesome',
        iconName: 'user',
        image: '',
        enlarge: false,
      },
    },
  },
  {
    tabBarComponent: props => <CustomBottomBar {...props} />,
    initialRouteName: SCREEN.BOTTOM_TAB.STUDIO,
  },
);

const App = createStackNavigator(
  {
    bottomTab: bottomTab,
    [SCREEN.EDIT_PROFILE]: EDIT_PROFILE,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const CustomBottomBar = ({navigation}) => {
  let {routes, index} = navigation.state;

  return (
    <LinearGradinet
      colors={['#201F40', '#201F50', '#201F60']}
      style={{
        width: '100%',
        paddingHorizontal: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: 10,
        }}>
        {routes.map((elements, currentItem) => {
          return (
            <TouchableOpacity
              key={currentItem}
              onPress={() => {
                navigation.navigate(elements.key);
              }}
              style={{alignItems: 'center', flex: 1}}>
              {elements.params.enlarge ? (
                <View style={{position: 'absolute', top: -30}}>
                  <View
                    style={{
                      height: 54,
                      width: 54,
                      borderRadius: 27,
                      borderWidth: 2,
                      borderColor: 'white',
                      shadowColor: 'black',
                      shadowOffset: {height: 2, width: 2},
                      shadowRadius: 2,
                      shadowOpacity: 1,
                      elevation: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={elements.params.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 27,
                        overflow: 'hidden',
                      }}
                    />
                  </View>
                  <Animated.Text
                    style={{
                      fontSize: 11,
                      color: currentItem === index ? 'grey' : 'white',
                      textAlign: 'center',
                      top: 2,
                    }}>
                    {elements.params.title}
                  </Animated.Text>
                </View>
              ) : (
                <>
                  <View>
                    <Icon
                      type={elements.params.iconType}
                      name={elements.params.iconName}
                      style={{color: 'white', fontSize: 22}}
                    />
                    {elements.params.badge && (
                      <View
                        style={{
                          width: 16,
                          height: 16,
                          backgroundColor: 'red',
                          borderRadius: 8,
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          right: -8,
                          top: -8,
                        }}>
                        <Text style={{fontSize: 9, color: 'white'}}>
                          {elements.params.badge}
                        </Text>
                      </View>
                    )}
                  </View>
                </>
              )}

              {!elements.params.enlarge && (
                <Animated.Text
                  style={{
                    fontSize: 11,
                    color: currentItem === index ? 'grey' : 'white',
                    textAlign: 'center',
                    top: 2,
                  }}>
                  {elements.params.title}
                </Animated.Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradinet>
  );
};

export default createAppContainer(App);
