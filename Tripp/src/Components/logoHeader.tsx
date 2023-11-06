import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import StyledText from './StyledText'

const LogoHeader = () => {
  return (
   <View style={{flexDirection:'row',paddingHorizontal:27,paddingVertical:16,justifyContent:'space-between',}}>
   <Image source={require('../assets/images/logo.png')} style={{width:64,height:33}} />
   {/* <TouchableOpacity>
     <View style={{width:127,height:32,borderRadius:36,backgroundColor:"#F5F5F5",justifyContent:'center',alignItems:'center'}}>
       <StyledText style={{fontWeight:'bold'}}>+ New</StyledText>
     </View>
   </TouchableOpacity> */}
 </View>
  )
}

export default LogoHeader

const styles = StyleSheet.create({})