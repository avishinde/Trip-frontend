import { Platform, StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions} from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import StyledText from './src/Components/StyledText'
import CustomButton,{ LoginButton } from './src/Components/CustomButton'
import NavigationContainer from './src/navigation'
import AuthScreen from './src/screens/AuthScreen'

const App = () => {
  useEffect(()=>{
    if(Platform.OS==='android'){
      SplashScreen.hide();
    }
  },[])
  return (
    // <AuthScreen />
      <NavigationContainer />
    
  )
}

export default App

const styles = StyleSheet.create({})