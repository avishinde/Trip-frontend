import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StyledText from '../../Components/StyledText';
import TripThumbnail from './TripThumbnail';
import axios from 'axios';
const MyTrips = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    // Fetch the list of trips from your API
    axios
      .get('http://localhost:5000/trips/', {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFhOTkzZTVhMGI4MTcxMGU2Mzg2YjQiLCJpYXQiOjE2OTY2ODE0MDksImV4cCI6MTY5Njc2NzgwOX0.lHgrom_CMxeoXMJI0TrcTyn3MGFG2SokYQ2yloSdclI', // Include the authorization token here
        },
      })
      .then(response => {
        // Update the state with the fetched trips
        setTrips(response.data.trips);
        // console.log(response.data.trips, 'trips');
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
        height: height - 80,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
      }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 27,
          paddingVertical: 16,
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 64, height: 33}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateTrip', {getTrips})}>
          <View
            style={{
              width: 127,
              height: 32,
              borderRadius: 36,
              backgroundColor: '#EB545D',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StyledText style={{fontWeight: 'bold', color: '#FFFF'}}>
              + New
            </StyledText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 33}}>
        <StyledText
          style={{
            fontSize: 24,
            fontWeight: '600',
            paddingHorizontal: 27,
            lineHeight: 24,
          }}>
          My{' '}
          <StyledText
            style={{
              fontSize: 24,
              color: '#EB545D',
              fontWeight: '700',
              lineHeight: 22,
            }}>
            Trips
          </StyledText>
        </StyledText>
      </View>
      {/* Display the list of trips using FlatList */}
      <FlatList
        data={trips}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TripDetails', {
                trip: item,
              })
            }>
            <TripThumbnail
              destination={item.destination}
              startDate={item.startDate}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id} // Use a unique key for each trip
      />
    </SafeAreaView>
  );
};

export default MyTrips;

const styles = StyleSheet.create({});
