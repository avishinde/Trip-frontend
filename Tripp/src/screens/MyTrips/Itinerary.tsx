import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MapViewComponent from '../../Components/MapView';
import DayCard from '../../Components/DayCard';
import PlaceCard from '../../Components/PlaceCard';
import CustomButton from '../../Components/CustomButton';

const Itinerary = ({navigation, route}) => {
  const {trip} = route.params;
  console.log(trip.tripPlan, 'trip');
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
          {/* <FlatList
            data={trip.tripPlan}
            keyExtractor={item => item._id}
            renderItem={DayCard}
          /> */}
          {/* {trip.tripPlan.map((day, index) => (
            <DayCard
              key={day._id}
              dayNumber={day.day}
              date={day.date}
              activities={day.activities}
            />
            // <DayCard />
          ))} */}
          {trip.tripPlan.map((day, index) => (
            <TouchableOpacity
              key={day._id}
              onPress={() => navigation.navigate('DayPlanView', {day, trip})}>
              <DayCard
                dayNumber={day.day}
                date={day.date}
                activities={day.activities}
              />
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton title="Add Day" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export default Itinerary;
