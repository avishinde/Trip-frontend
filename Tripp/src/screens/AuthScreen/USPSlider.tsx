import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import StyledText from '../../Components/StyledText';

const { width } = Dimensions.get('window');

const USPSlider = () => {
  return (
   <View style={{height:173,marginBottom:66}}>
   <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop showPagination paginationDefaultColor={'#D9D9D9'} paginationActiveColor={'#EB545D'} 
   style={{height:173}}
   paginationStyleItem={{height:16,width:16,marginHorizontal:0,marginRight:8}}
   paginationStyle={{alignSelf:'flex-start',marginBottom:0,paddingHorizontal:0}}>
      <View style={{width:width}}>
         <StyledText style={{fontSize:24,fontWeight:'400',lineHeight:29,marginBottom:28}}>
         Explore destinations at {'\n'}
         your own pace
         </StyledText>
         <StyledText style={{fontSize:24,fontWeight:'300',lineHeight:29}}>
         Plan <StyledText style={{color:'#EB545D',fontSize:24,fontWeight:'500',lineHeight:29}}>trips</StyledText>
         </StyledText>
    </View>
      <View style={{width:width}}>
         <StyledText style={{fontSize:24,fontWeight:'400',lineHeight:29,marginBottom:28}}>
         Edit, iterate and enjoy {'\n'}
            dream destinations together 
         </StyledText>
         <StyledText style={{fontSize:24,fontWeight:'300',lineHeight:29}}>
         Add <StyledText style={{color:'#EB545D',fontSize:24,fontWeight:'500',lineHeight:29}}>friends</StyledText>
         </StyledText>
    </View>
      <View style={{width:width}}>
         <StyledText style={{fontSize:24,fontWeight:'400',lineHeight:29,marginBottom:28}}>
         Track every spot, moments {'\n'}
         and expenses in real-time
         </StyledText>
         <StyledText style={{fontSize:24,fontWeight:'300',lineHeight:29}}>
         Trip <StyledText style={{color:'#EB545D',fontSize:24,fontWeight:'500',lineHeight:29}}>Sync</StyledText>
         </StyledText>
    </View>
   </SwiperFlatList>
   </View>
  )
}

export default USPSlider

const styles = StyleSheet.create({})
