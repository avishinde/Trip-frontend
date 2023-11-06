import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LogoHeader from '../../Components/logoHeader';
import StyledText from '../../Components/StyledText';
import {ScrollView} from 'react-native';
import TripOptions from '../../Components/TripOptions';

const TripDetails = ({navigation, route}) => {
  const {trip} = route.params;
  console.log(trip._id, 'trip');
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <LogoHeader />
      <View style={{paddingHorizontal: 27}}>
        <View style={{marginTop: 10}}>
          <StyledText style={{fontSize: 24, fontWeight: '600', lineHeight: 24}}>
            {trip.baseLocation} -{' '}
            <StyledText
              style={{
                fontSize: 24,
                color: '#EB545D',
                fontWeight: '500',
                lineHeight: 22,
              }}>
              {trip.destination}
            </StyledText>
          </StyledText>
        </View>
        <View
          style={{
            height: 182,
            borderRadius: 24,
            backgroundColor: 'pink',
            marginTop: 18,
            marginBottom: 26,
          }}></View>
        <StyledText style={{fontSize: 24, fontWeight: '600', lineHeight: 24}}>
          Your Plan
        </StyledText>
        <View style={{height: 400}}>
          <ScrollView
            contentContainerStyle={{marginBottom: 150}}
            keyboardShouldPersistTaps="handled"
            style={{flex: 1}}>
            <TripOptions
              title="Basic details"
              description="Location, trip duration & members"
            />
            <TouchableOpacity
              onPress={() => {
                // console.log(trip.tripPlan);
                navigation.navigate('Itinerary', {trip: trip});
              }}>
              <TripOptions
                title="Itinerary"
                description="Plan activities to do on trip"
              />
            </TouchableOpacity>
            <TripOptions
              title="Transportation"
              description="Plan mode of transport"
            />
            <TripOptions
              title="Accomodation"
              description="Plan where to stay during trip"
            />
            <TripOptions
              title="Documents/Proofs"
              description="Upload tickets, id proofs"
            />
            <TripOptions
              title="Packing guide"
              description="What to bag-pack and what not"
            />
            <TripOptions
              title="Notes/Announcements"
              description="Notes or news regarding your trip"
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripDetails;

const styles = StyleSheet.create({});
