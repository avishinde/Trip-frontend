import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StyledText from './StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type TripOptionsProps = {
  title: string;
  description: string;
};

const TripOptions = ({title, description}: TripOptionsProps) => {
  let imageSource;

  // Use a switch statement to dynamically select the image
  switch (title) {
    case 'Basic details':
      imageSource = require('../assets/images/tripIcon/location.png');
      break;
    case 'Transportation':
      imageSource = require('../assets/images/tripIcon/plane.png');
      break;
    case 'Accomodation':
      imageSource = require('../assets/images/tripIcon/bed.png');
      break;
    case 'Itinerary':
      imageSource = require('../assets/images/tripIcon/Itinerary.png');
      break;
    case 'Documents/Proofs':
      imageSource = require('../assets/images/tripIcon/documents.png');
      break;
    case 'Packing guide':
      imageSource = require('../assets/images/tripIcon/bag.png');
      break;
    case 'Notes/Announcements':
      imageSource = require('../assets/images/tripIcon/announcement.png');
      break;
    default:
      // Provide a default image source in case imageName doesn't match any cases
      imageSource = require('../assets/images/tripIcon/location.png');
      break;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#F5F5F5',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 14,
          }}>
          <Image source={imageSource} />
        </View>
        <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
          <StyledText style={{fontSize: 16, fontWeight: 'bold'}}>
            {title}
          </StyledText>
          <StyledText
            style={{fontSize: 12, fontWeight: '400', color: '#959595'}}>
            {description}
          </StyledText>
        </View>
      </View>
      <MaterialIcons name="edit" size={16} color="#EB545D" />
    </View>
  );
};

export default TripOptions;

const styles = StyleSheet.create({});
