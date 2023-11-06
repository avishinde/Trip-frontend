import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StyledText from './StyledText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const PlaceCard = ({location, description}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View style={{alignItems: 'center', marginRight: 2}}>
        {/* <View
          style={{
            width: 2,
            backgroundColor: 'blue',
            height: 10,
          }}></View> */}
        <View
          style={{
            height: 19,
            width: 19,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: '#EB545D',
          }}></View>
        <View
          style={{
            width: 2,
            backgroundColor: '#EB545D',

            flex: 1,
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: '#F9F9F9',
          borderRadius: 8,
          alignItems: 'center',
          padding: 12,
          paddingRight: 16,
          paddingLeft: 8,
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="dots-three-vertical" size={16} color="#CBCBCB" />
          <View style={{marginLeft: 14}}>
            <StyledText style={{color: '#4F4F4F'}}>{location}</StyledText>
            <StyledText style={{fontSize: 12, color: '#989898'}}>
              {description}
            </StyledText>
          </View>
        </View>
        <AntDesign name="delete" size={20} color="#EB545D" />
      </View>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({});
