import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MapViewComponent from '../../Components/MapView';
import DayCard from '../../Components/DayCard';
import PlaceCard from '../../Components/PlaceCard';
import CustomButton from '../../Components/CustomButton';
import StyledText from '../../Components/StyledText';
import axios from 'axios';

const AddPlace = ({navigation, route}) => {
  //   const {day, trip} = route.params;
  const [day, setday] = useState(route.params.day);
  const [trip, setTrip] = useState(route.params.trip);

  const [Location, setLocation] = useState('');
  const [Description, setDescription] = useState('');
  const handleAddPlace = () => {
    const PlaceData = {
      location: Location,
      time: '10.00',
      description: Description,
    };

    axios
      .post(
        `http://localhost:5000/trips/add-activity/${trip._id}/${day.day}`,
        PlaceData,
        {
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFhOTkzZTVhMGI4MTcxMGU2Mzg2YjQiLCJpYXQiOjE2OTY2ODE0MDksImV4cCI6MTY5Njc2NzgwOX0.lHgrom_CMxeoXMJI0TrcTyn3MGFG2SokYQ2yloSdclI', // Include the authorization token here
          },
        },
      )
      .then(response => {
        // Handle the API response as needed
        setTrip(response.data.trip);
        setday(response.data.trip.tripPlan[day.day - 1]);
        //   console.log(response.data.trip.tripPlan[day.day - 1]);

        navigation.navigate('DayPlanView', {trip, day});
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  };
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <StyledText>Location</StyledText>
            <TextInput
              placeholder="Add a location"
              style={{}}
              value={Location}
              onChangeText={text => setLocation(text)}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <StyledText>Description</StyledText>
            <TextInput
              placeholder="Add activity details"
              style={{}}
              value={Description}
              onChangeText={text => setDescription(text)}
            />
          </View>
        </View>
        <CustomButton
          title="Add Place"
          onPress={() => {
            handleAddPlace();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AddPlace;
