import { Text, Dimensions, StyleSheet, View, Touchable, TouchableOpacity, Image,TextInput } from 'react-native';
import React from 'react'
import CustomButton, { LoginButton } from '../../Components/CustomButton';
import StyledText from '../../Components/StyledText';

const LoginComponent = () => {
  return (
   <View style={{}}>
   <StyledText style={{marginBottom:20,fontSize:18,lineHeight:22}}>Login/Signup</StyledText>
   <View style={{borderWidth:2,height:116,borderRadius:12,borderColor:'#A4A4A4'}}>
     <View style={{flex:1,borderBottomWidth:1,borderColor:'#A4A4A4',justifyContent:'center',paddingHorizontal:16}}>
       <StyledText style={{fontSize:12,lineHeight:14,color:"#606060"}}>County/Region</StyledText>
       <StyledText style={{fontSize:14,lineHeight:16.71,color:"#606060",fontWeight:"500",marginTop:7}}>India (+91)</StyledText>
     </View>
     <View style={{flex:1,justifyContent:'center',paddingHorizontal:16}}>
       <TextInput placeholder='Phone Number' placeholderTextColor={"#B7B7B7"} style={{fontSize:16,lineHeight:19}} />
     </View>
   </View>
   <View style={{marginTop:15,}}>
     <StyledText style={{textAlign:'center',fontSize:12,lineHeight:14}}>
     We’ll call or text you to confirm your number.{'\n'}
     Standard message and data rates apply. Privacy policy
     </StyledText>
   </View>
   <View style={{alignItems:'center',marginTop:27.5}}>
     <LoginButton title='Get started ' onPress={()=>{}} />
   </View>
 </View>
  )
}

export default LoginComponent

const styles = StyleSheet.create({})