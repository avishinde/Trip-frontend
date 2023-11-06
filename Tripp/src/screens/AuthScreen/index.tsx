import React,{useState} from 'react';
import { Text, Dimensions, StyleSheet, View, Touchable, TouchableOpacity, Image,TextInput } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import StyledText from '../../Components/StyledText';
import USPSlider from './USPSlider';
import CustomButton, { LoginButton } from '../../Components/CustomButton';
import LoginComponent from './LoginComponent';
import OtpComponent from './OtpComponent';
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '267610346955-0eo0ino9ta6p2n74h8b558683d892kq5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

});

const { width } = Dimensions.get('window');
const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo); // Use setUserInfo to update the state
      console.log('clicked',userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };
  return (
    <View style={{flex:1,paddingHorizontal:20,justifyContent:'center'}}>
      <Image source={require("../../assets/images/logo.png")} style={{width:101,height:52.42,alignSelf:'flex-start',marginBottom:40}} />
      {/* <USPSlider /> */}
      {/* <LoginComponent /> */}
      {/* <OtpComponent /> */}
      {/* {showLogin ? (
        <LoginComponent toggleComponent={toggleComponent} />
      ) : (
        <OtpComponent />
      )} */}
      <CustomButton onPress={()=>signIn()} title='Google sign in'/>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
 
})