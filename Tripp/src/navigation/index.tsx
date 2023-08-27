import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notifications';
import Profile from '../screens/Profile';
import MyTrips from '../screens/MyTrips';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'

const BottomTabBar = createBottomTabNavigator();
//  type IconProps = PropsWithChildren<{
//    name:string
//  }>

const Navigation = () => {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor="transparent" translucent={true} />
      <BottomTabBar.Navigator
         screenOptions={({route,navigation})=>({
            tabBarStyle: {
               backgroundColor: 'white',
               borderTopWidth: 0,
               height: 72,
               borderTopLeftRadius:36,
               borderTopRightRadius:36,
               // paddingTop: 10,
               paddingBottom:12,
               paddingTop:10,
               position:'absolute',
               
             },
            headerShown:false,
            tabBarActiveTintColor:"#EB545D",
            tabBarInactiveTintColor:"#797979",
            // tabBarShowLabel:false,
            tabBarLabel: navigation.isFocused() ? route.name : '' ,
            tabBarLabelStyle :{
            fontFamily: 'SF-Pro-Display-Regular',
            fontSize : 10,
            lineHeight: 12,
            fontWeight: "600",
            marginBottom:5
            }
         })}
         
      >
         <BottomTabBar.Screen name="Explore" component={Home}  
             options={{
              tabBarIcon:({color})=><FontAwesome6 name='earth-americas' size={25} color={color}/>
               }}
         />
         <BottomTabBar.Screen name="MyTrips" component={MyTrips}
          options={{
              tabBarIcon:({color})=><FontAwesome6 name='location-arrow' size={25} color={color}/>
               }}
         />
         <BottomTabBar.Screen name="Notification" component={Notification} 
          options={{
              tabBarIcon:({color})=><Entypo name='chat' size={25} color={color}/>,
              
               }}
         />
         <BottomTabBar.Screen name="Profile" component={Profile} 
          options={{
              tabBarIcon:({color})=><FontAwesome6 name='user-large' size={25} color={color}/>,
              
               }}
         />
      </BottomTabBar.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})