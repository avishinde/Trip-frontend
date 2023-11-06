import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton';
import MapView, {Region} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import StyledText from '../../Components/StyledText';
import {Calendar} from 'react-native-calendars';
import Navigation from '../../navigation';
import RNPickerSelect from 'react-native-picker-select';
import MapViewComponent from '../../Components/MapView';
import axios from 'axios';
const CreateTrip = ({navigation, route}) => {
  const getTrips = route.params;
  const [goingOnDate, setGoingOnDate] = useState('');
  const [returningOnDate, setReturningOnDate] = useState('');
  const [showGoingOnCalendar, setShowGoingOnCalendar] = useState(false);
  const [showReturningOnCalendar, setShowReturningOnCalendar] = useState(false);
  const [tripType, setTripType] = useState('Solo');
  const [destination, setDestination] = useState('');
  const [HomeLocation, setHomeLocation] = useState('');

  const handleCreateTrip = () => {
    const tripData = {
      destination: destination,
      baseLocation: HomeLocation,
      tripType: tripType,
      startDate: goingOnDate,
      returnDate: returningOnDate,
    };
    // console.log(tripData, 'tripData');
    axios
      .post('http://localhost:5000/trips/create-trip', tripData, {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFhOTkzZTVhMGI4MTcxMGU2Mzg2YjQiLCJpYXQiOjE2OTY2ODE0MDksImV4cCI6MTY5Njc2NzgwOX0.lHgrom_CMxeoXMJI0TrcTyn3MGFG2SokYQ2yloSdclI', // Include the authorization token here
        },
      })
      .then(response => {
        // Handle the API response as needed
        console.log(response.data);

        navigation.navigate('MyTrips');
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  };

  const handleGoingOnDateChange = (date: string) => {
    setGoingOnDate(date);
    setShowGoingOnCalendar(false);
  };

  const handleReturningOnDateChange = (date: string) => {
    setReturningOnDate(date);
    setShowReturningOnCalendar(false);
  };

  const showGoingOnCalendarHandler = () => {
    setShowGoingOnCalendar(true);
  };

  const showReturningOnCalendarHandler = () => {
    setShowReturningOnCalendar(true);
  };

  const initialRegion: Region = {
    latitude: 11.411008387491169,
    longitude: 76.6947937879296,
    latitudeDelta: 0.092,
    longitudeDelta: 0.00921,
  };
  return (
    <View style={{height: '100%', flex: 1}}>
      {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
         key: 'AIzaSyDlDMoui9NldQKgAdAK1HSP_kuRbGuE_WY',
        language: 'en',
      }}
      styles={{height:40}} 
      fetchDetails={true}
      autoFocus={true}
      debounce={300}
      styles={{
         container: {
           flex: 0,
         },
         textInputContainer: {
           backgroundColor: 'rgba(0,0,0,0)',
           borderTopWidth: 0,
           borderBottomWidth:0,
         },
         textInput: {
           marginLeft: 0,
           marginRight: 0,
           height: 38,
           color: '#5d5d5d',
           fontSize: 16,
         },
         predefinedPlacesDescription: {
           color: '#1faadb',
         },
       }}
    /> */}
      <View style={{height: '35%'}}>
        <MapViewComponent />
      </View>
      <View
        style={{
          height: '65%',
          backgroundColor: '#ffff',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: -40,
          flex: 1,
        }}>
        <View
          style={{
            height: 60,
            borderBottomColor: 'red',
            borderBottomWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              borderRadius: 13,
              height: 26,
              width: 26,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}>
            <Text style={{fontSize: 12}}>01</Text>
          </View>
          <Text>Setup your trip</Text>
        </View>
        <View style={{padding: 20, justifyContent: 'space-between'}}>
          <View style={{height: '70%', justifyContent: 'space-between'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <StyledText>Trip to</StyledText>
              <TextInput
                placeholder="Select a place"
                style={{}}
                value={destination}
                onChangeText={text => setDestination(text)}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <StyledText>From</StyledText>
              <TextInput
                placeholder="Select a place"
                style={{}}
                value={HomeLocation}
                onChangeText={text => setHomeLocation(text)}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <StyledText>Trip type</StyledText>
              <RNPickerSelect
                onValueChange={value => setTripType(value)}
                items={[
                  {label: 'Solo', value: 'Solo'},
                  {label: 'Family', value: 'Family'},
                  {label: 'Couple', value: 'Couple'},
                  {label: 'Group', value: 'Group'},
                ]}
                value={tripType}
                style={{inputAndroid: {fontSize: 16}}}
              />
            </View>
            {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <StyledText>going on</StyledText>
            <TextInput placeholder='Date' style={{}} />
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <StyledText>returning on</StyledText>
            <TextInput placeholder='Date' style={{}} />
         </View>       */}
            <TouchableOpacity onPress={showGoingOnCalendarHandler}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <StyledText style={{fontSize: 16}}>Going on:</StyledText>
                <StyledText style={{fontSize: 16}}>{goingOnDate}</StyledText>
              </View>
            </TouchableOpacity>
            <Modal
              visible={showGoingOnCalendar}
              animationType="slide"
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
              transparent={true}>
              <Calendar
                onDayPress={day => handleGoingOnDateChange(day.dateString)}
                markedDates={{[goingOnDate]: {selected: true}}}
                minDate={new Date().toISOString().split('T')[0]}
                style={{
                  marginHorizontal: 20,
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 15,
                  marginTop: '50%',
                }}
              />
            </Modal>
            <TouchableOpacity onPress={showReturningOnCalendarHandler}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <StyledText style={{fontSize: 16}}>Returning on:</StyledText>
                <StyledText style={{fontSize: 16}}>
                  {returningOnDate}
                </StyledText>
              </View>
            </TouchableOpacity>
            <Modal
              visible={showReturningOnCalendar}
              animationType="slide"
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}
              transparent={true}>
              <Calendar
                onDayPress={day => handleReturningOnDateChange(day.dateString)}
                markedDates={{[returningOnDate]: {selected: true}}}
                minDate={goingOnDate.toString().split('T')[0]}
                style={{
                  marginHorizontal: 20,
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 15,
                  marginTop: '50%',
                }}
              />
            </Modal>
          </View>
          <CustomButton title="Create Trip" onPress={() => getTrips()} />
        </View>
      </View>
    </View>
  );
};

export default CreateTrip;
