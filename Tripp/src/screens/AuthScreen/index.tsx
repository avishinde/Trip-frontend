import React from 'react';
import { Text, Dimensions, StyleSheet, View, Touchable, TouchableOpacity, Image,TextInput } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import StyledText from '../../Components/StyledText';
import USPSlider from './USPSlider';
import CustomButton, { LoginButton } from '../../Components/CustomButton';
import LoginComponent from './LoginComponent';
import OtpComponent from './OtpComponent';
const { width } = Dimensions.get('window');
const AuthScreen = () => {
  return (
    <View style={{flex:1,paddingHorizontal:20,justifyContent:'center'}}>
      
        {/* <USPSlider /> */}
      <LoginComponent />
      {/* <OtpComponent /> */}
      
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
 
})