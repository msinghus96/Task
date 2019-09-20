import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, DatePickerAndroid} from 'react-native';
import {
  Wrapper,
  Button,
  Text as MyText,
  TextInput,
  Icon as ImageIcon,
} from '../../components';
import {IMAGES, TEXT} from '../../shared/constants';
import {Content, Form, Item, Input, Label, Icon} from 'native-base';

import ImagePicker from 'react-native-image-picker';

const screen = ({navigation: {goBack}}) => {
  const [date, updateDate] = useState(null);
  const [allergies, updateAllergies] = useState({});
  const [editingAllergy, updateEditingAllergy] = useState(null);
  const [image, updateImage] = useState(null);

  return (
    <Wrapper
      onBackPress={() => {
        goBack();
      }}
      scroll
      containerStyle={{paddingHorizontal: 50}}
      title="MY PROFILE"
      barStyle="dark-content">
      <TouchableOpacity
        onPress={() => {
          ImagePicker.showImagePicker(
            {title: 'Select profile picture'},
            response => {
              if (response.didCancel) {
                // console.log("User cancelled image picker");
              } else if (response.error) {
                // console.log("ImagePicker Error: ", response.error);
              } else {
                const source = {uri: response.uri};
                updateImage(response.uri);
              }
            },
          );
        }}
        style={{
          height: 160,
          width: 160,
          borderRadius: 80,
          borderWidth: 3,
          borderColor: 'white',
          shadowColor: 'black',
          shadowOffset: {height: 4, width: 2},
          shadowRadius: 9,
          shadowOpacity: 0.9,
          elevation: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Image
          source={image ? {uri: image} : IMAGES.STUDIO}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 80,
            overflow: 'hidden',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: 'black',
          alignSelf: 'flex-start',
        }}>
        {TEXT.UPDATE_PROFILE}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '200',
          color: 'light-grey',
          alignSelf: 'flex-start',
        }}>
        {TEXT.CREATE_PROFILE_DESCRIPTION}
      </Text>
      <Content style={{width: '100%'}}>
        <Form>
          <TextInput label="First Name" />
          <TextInput label="Last Name" />

          <TextInput
            label="Birthday"
            value={date}
            onTouchStart={() => {
              DatePickerAndroid.open({
                date: date ? new Date(date) : new Date(),
                maxDate: new Date(),
              }).then(response => {
                if (response.action === 'dateSetAction') {
                  let selectedDate = `${response.month + 1}/${response.day}/${
                    response.year
                  }`;
                  updateDate(selectedDate);
                }
              });
            }}
          />

          <TextInput
            label="Allergies"
            value={editingAllergy}
            onChangeText={text => {
              updateEditingAllergy(text);
            }}
            onSubmitEditing={() => {
              if (editingAllergy && editingAllergy.length) {
                updateAllergies({
                  ...allergies,
                  [editingAllergy]: editingAllergy,
                });
                updateEditingAllergy('');
              }
            }}
            icon={!!(editingAllergy && editingAllergy.length > 0)}
            iconName="plus"
            iconPress={() => {
              if (editingAllergy && editingAllergy.length) {
                updateAllergies({
                  ...allergies,
                  [editingAllergy]: editingAllergy,
                });
                updateEditingAllergy('');
              }
            }}
          />

          {Object.keys(allergies).map((item, index) => {
            return (
              <TextInput
                key={index}
                label=" "
                value={item}
                editable={false}
                icon={true}
                iconName="minus"
                iconPress={() => {
                  delete allergies[item];
                  updateAllergies({
                    ...allergies,
                  });
                }}
              />
            );
          })}

          <TextInput label="Notes" numberOfLines={3} multiline />

          <Button onPress={() => {}} text={TEXT.UPDATE_PROFILE} />
        </Form>
      </Content>
    </Wrapper>
  );
};

export default screen;
