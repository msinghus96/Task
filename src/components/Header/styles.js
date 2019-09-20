import {StyleSheet, StatusBar, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  itemConatiner: {
    width: '100%',
    height: 44,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
