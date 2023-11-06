import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import StyledText from '../../Components/StyledText';
import moment from 'moment';
import axios from 'axios';

type TripThumbnailProps = {
  startDate: string;
  destination: string;
};

const TripThumbnail = ({startDate, destination}: TripThumbnailProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Old code directy fetch image from unsplash
    // const fetchImage = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://api.unsplash.com/photos/random?query=${destination}&orintation=landscape&client_id=vA6BHUJwPGYfxIZtjs_12szGiFWWgMfl7xVeXKws_LM&premium=true`,
    //     );
    //     setImageUrl(response.data.urls.regular);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // New code fetch image from our own API
    const fetchImage = async () => {
      try {
        // Check if the destination and image link are available in the backend
        const checkResponse = await axios.get(
          `http://localhost:5000/destination/check/${destination}`,
        );
        if (checkResponse.data.imageUrl) {
          // If available, use the stored image URL
          setImageUrl(checkResponse.data.imageUrl);
        } else {
          // If not available, fetch data from Unsplash
          const unsplashResponse = await axios.get(
            `https://api.unsplash.com/photos/random?query=${destination}&orintation=landscape&client_id=vA6BHUJwPGYfxIZtjs_12szGiFWWgMfl7xVeXKws_LM&premium=true`,
          );

          const unsplashImageUrl = unsplashResponse.data.urls.regular;

          // Store the destination and image link in the backend for future use
          const saveResponse = await axios.post(
            'http://localhost:5000/destination/save',
            {
              destination,
              imageUrl: unsplashImageUrl,
            },
          );

          setImageUrl(saveResponse.data.imageUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchImage();
  }, [destination]);
  return (
    <View
      style={{
        height: 176,
        backgroundColor: 'red',
        borderRadius: 24,
        marginHorizontal: 27,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 12,
      }}>
      <ImageBackground
        source={
          imageUrl ? {uri: imageUrl} : require('../../assets/images/mytrip.png')
        }
        style={{
          backgroundColor: 'pink',
          flex: 0.7,
          alignItems: 'flex-end',
          padding: 11,
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFFCC',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 12,
            width: 'auto',
          }}>
          <StyledText style={{fontSize: 18, color: '#EB545D'}}>
            {destination}
          </StyledText>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="location-pin" size={10} color="#2F2F2F" />
            <StyledText style={{fontSize: 10, color: '#2F2F2F', marginLeft: 6}}>
              India
            </StyledText>
          </View>
        </View>
      </ImageBackground>
      <View style={{backgroundColor: 'green', flex: 0.3}}>
        <View
          style={{
            height: '75%',
            backgroundColor: '#4F4F4F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome6
            name="calendar-days"
            size={40}
            color="#fff"
            style={{marginBottom: 10}}
          />
          <StyledText style={{color: '#FFFFFF'}}>
            {moment(startDate).format('Do MMM')}
          </StyledText>
          <StyledText style={{fontSize: 12, color: '#FFFFFF'}}>
            {moment(startDate).format('YYYY')}
          </StyledText>
        </View>
        <View
          style={{
            height: '25%',
            backgroundColor: '#2F2F2F',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StyledText
            style={{
              fontSize: 12,
              color: '#FFFFFF',
              marginRight: 9,
              fontWeight: '500',
            }}>
            Edit plan
          </StyledText>
          <MaterialIcons name="edit" size={10} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default TripThumbnail;

const styles = StyleSheet.create({});
