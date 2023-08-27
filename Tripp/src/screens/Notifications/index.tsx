import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton'

const Notification = () => {
  return (
    <View style={{alignItems:'center',justifyContent:"center",flex:1,paddingHorizontal:12}}>
      <CustomButton title='Hellow' onPress={()=>{}} disabled/>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})