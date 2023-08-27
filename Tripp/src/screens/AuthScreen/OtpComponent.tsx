import { Text, Dimensions, StyleSheet, View, Touchable, TouchableOpacity, Image,TextInput } from 'react-native';
import React from 'react'
import CustomButton, { LoginButton } from '../../Components/CustomButton';
import StyledText from '../../Components/StyledText';


const OtpComponent = () => {
  return (
   <View>
   <StyledText style={{fontSize:18,lineHeight:22.50,marginBottom:14}}>Confirm your number</StyledText>
   <View style={{marginBottom:15}}>
     <StyledText style={{fontSize:14,lineHeight:16.71,color:'#ADADAD',marginBottom:28.5}}>Enter the code we’ve sent vis SMS to +91-9819382873 (Change)</StyledText>
     <View style={{borderColor:"#A4A4A4",borderWidth:1,height:60,borderRadius:12}}>
     </View>
   </View>
   <StyledText style={{fontSize:12,lineHeight:14.32,color:'#ADADAD',textAlign:'center'}}>Haven’t received the code? Resend in 00:29 sec</StyledText>
   <View style={{alignItems:'center',marginTop:42}}>
     <LoginButton title='Submit' onPress={()=>{}} disabled/>
     <StyledText style={{marginTop:30.5}}>Need help?</StyledText>
   </View>
 </View>
  )
}

export default OtpComponent

const styles = StyleSheet.create({})