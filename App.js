/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigation from './src/shared/services/navigation';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(true);
    return () => {};
  }, []);

  return (
    <View style={[styles.flexOne]}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default App;
