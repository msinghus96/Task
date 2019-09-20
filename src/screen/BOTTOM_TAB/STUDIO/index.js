import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../../../shared/constants';
import {Wrapper} from '../../../components';
import {Icon} from 'native-base';
import {Profile_Top_Tab} from '../../../shared/services/navigation';
import {SCREEN} from '../../../shared/constants/screen';

const screen = ({navigation: {navigate}}) => {
  return (
    <Wrapper
      containerStyle={{flex: 1}}
      safeAreaView={false}
      scroll
      statusBarPadding={false}>
      <ImageBackground
        style={{width: '100%', height: 250}}
        source={IMAGES.HEADER}
      />
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          borderWidth: 3,
          borderColor: 'white',
          shadowColor: 'black',
          shadowOffset: {height: 4, width: 2},
          shadowRadius: 9,
          shadowOpacity: 0.9,
          elevation: 8,
          alignItems: 'center',
          justifyContent: 'center',
          top: 180,
          position: 'absolute',
        }}>
        <Image
          source={IMAGES.STUDIO}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 50,
            overflow: 'hidden',
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigate(SCREEN.EDIT_PROFILE)}
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'white',
          shadowColor: 'black',
          shadowOffset: {height: 4, width: 2},
          shadowRadius: 3,
          shadowOpacity: 0.9,
          elevation: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          // alignSelf: 'center',
          position: 'absolute',
          top: 195,
          left: '75%',
        }}>
        <Icon
          type="MaterialIcons"
          name="mode-edit"
          style={{
            fontSize: 26,
            color: '#F78A68',
          }}
        />
      </TouchableOpacity>

      <Text style={{marginTop: 35, fontSize: 22}}>USer Name</Text>

      <Text>Level 1</Text>

      <View
        style={{
          // height: 100,
          width: '85%',
          borderRadius: 5,
          shadowColor: 'black',
          shadowOffset: {height: 110, width: 1},
          backgroundColor: 'white',
          shadowRadius: 8,
          shadowOpacity: 0.6,
          elevation: 4,
          justifyContent: 'center',
          paddingHorizontal: 8,
          paddingVertical: 15,
          marginTop: 15,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 5,
            right: 5,
            top: -10,
            backgroundColor: 'white',
            paddingLeft: 5,
          }}>
          <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 16}}>
            BIO
          </Text>
        </View>
        <Text>* Dance is life *</Text>
        <Text>BHS Brave | Animal lover | Gemini</Text>
      </View>
      <View style={{flex: 1, width: '100%', paddingTop: 15, minHeight: 200}}>
        <Profile_Top_Tab />
      </View>
    </Wrapper>
  );
};

export default screen;
