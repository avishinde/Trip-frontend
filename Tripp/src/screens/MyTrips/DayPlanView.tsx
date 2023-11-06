import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapViewComponent from '../../Components/MapView';
import DayCard from '../../Components/DayCard';
import PlaceCard from '../../Components/PlaceCard';
import CustomButton from '../../Components/CustomButton';

const DayPlanView = ({navigation, route}) => {
  //   const {day, trip} = route.params;
  const [day, setday] = useState(route.params.day);
  const [trip, setTrip] = useState(route.params.trip);

  console.log(day, 'day');
  console.log(trip._id, 'trip');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.35}}>
        <MapViewComponent />
      </View>
      <ScrollView
        style={{
          flex: 0.65,
          //  height: '65%',
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: -40,
          paddingHorizontal: 20,
        }}>
        <View style={{marginTop: 40}}>
          {day.activities.map((activity, index) => (
            <PlaceCard
              key={index}
              location={activity.location}
              description={activity.description}
            />
          ))}
        </View>
        <CustomButton
          title="Add Place"
          onPress={() => {
            navigation.navigate('AddPlace', {trip, day});
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DayPlanView;
