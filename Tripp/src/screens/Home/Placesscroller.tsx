import { StyleSheet, Text, View,Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import StyledText from '../../Components/StyledText';

interface PlacesscrollerProps {
   item: any; // Replace 'any' with the actual type of the 'item' prop
   index: number;
   currentIndex: number;
 } 

 const Placesscroller: React.FC<PlacesscrollerProps> = ({ item, index, currentIndex }) => {
   const  width = Dimensions.get('window').width;
   const  height = Dimensions.get('window').height;
   
  return (
   <View style={{width:width,height:height,}}>
      <ImageBackground style={{width:width,height:height-80,alignItems:'center'}} source={{uri:item.uri}} imageStyle={{borderBottomLeftRadius:36,borderBottomRightRadius:36}}>
        <View style={{alignItems:'center',justifyContent:'center',top:100,padding:10,backgroundColor:' rgba(255, 255, 255, 0.4)',width:0.7*width,}}>
         <StyledText style={{fontSize:72,lineHeight:80}}>{item.place}</StyledText>
        </View>
      </ImageBackground>
   </View>
  )
}

export default Placesscroller

const styles = StyleSheet.create({})