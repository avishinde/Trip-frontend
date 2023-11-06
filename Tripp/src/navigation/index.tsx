import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notifications';
import Profile from '../screens/Profile';
import MyTrips from '../screens/MyTrips';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateTrip from '../screens/MyTrips/CreateTrip';
import CreateTrip2 from '../screens/MyTrips/CreateTrip2';
import Itinerary from '../screens/MyTrips/Itinerary';
import TripDetails from '../screens/MyTrips/TripDetails';
import DayPlanView from '../screens/MyTrips/DayPlanView';
import AddPlace from '../screens/MyTrips/AddPlace';

const BottomTabBar = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const CreateTripS = createNativeStackNavigator();

//  type IconProps = PropsWithChildren<{
//    name:string
//  }>
function BottomTabBarScreens() {
  return (
    <BottomTabBar.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          height: 72,
          borderTopLeftRadius: 36,
          borderTopRightRadius: 36,
          // paddingTop: 10,
          paddingBottom: 12,
          paddingTop: 10,
          position: 'absolute',
        },
        headerShown: false,
        tabBarActiveTintColor: '#EB545D',
        tabBarInactiveTintColor: '#797979',
        // tabBarShowLabel:false,
        tabBarLabel: navigation.isFocused() ? route.name : '',
        tabBarLabelStyle: {
          fontFamily: 'SF-Pro-Display-Regular',
          fontSize: 10,
          lineHeight: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
      })}>
      <BottomTabBar.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="earth-americas" size={25} color={color} />
          ),
        }}
      />
      <BottomTabBar.Screen
        name="MyTrips"
        component={MyTrips}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="location-arrow" size={25} color={color} />
          ),
        }}
      />
      <BottomTabBar.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="chat" size={25} color={color} />
          ),
        }}
      />
      <BottomTabBar.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="user-large" size={25} color={color} />
          ),
        }}
      />
    </BottomTabBar.Navigator>
  );
}
const CreateTripStack = () => (
  <CreateTripS.Navigator initialRouteName="CreateTrip">
    <CreateTripS.Screen
      name="CreateTrip1"
      component={CreateTrip}
      options={{headerShown: false}}
    />
    <CreateTripS.Screen
      name="CreateTrip2"
      component={CreateTrip2}
      options={{headerShown: false}}
    />
  </CreateTripS.Navigator>
);

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <RootStack.Navigator initialRouteName="TabBar">
        <RootStack.Group>
          <RootStack.Screen
            name="TabBar"
            component={BottomTabBarScreens}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="CreateTrip"
            component={CreateTripStack}
            options={{headerShown: false}}
          />
          {/* <RootStack.Screen
            name="CreateTrip2"
            component={CreateTrip2}
            options={{headerShown: false}}
          /> */}
          <RootStack.Screen
            name="Itinerary"
            component={Itinerary}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="TripDetails"
            component={TripDetails}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="DayPlanView"
            component={DayPlanView}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const styles = StyleSheet.create({});
