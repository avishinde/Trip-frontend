import {View, Text} from 'react-native';
import React from 'react';
import MapViewComponent from '../../Components/MapView';

const CreateTrip2 = () => {
  return (
    <View style={{height: '100%', flex: 1}}>
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
        }}></View>
    </View>
  );
};

export default CreateTrip2;
