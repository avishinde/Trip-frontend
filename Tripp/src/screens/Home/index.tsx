import { StyleSheet, Text, View , Image, ImageBackground} from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Placesscroller from './Placesscroller';

const imageData = [
  {
    place : "Manali",
    Title : 'Kullu-Manali',
    uri : 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=M3w0OTQzMzN8MHwxfHNlYXJjaHwxfHxNYW5hbGl8ZW58MHx8fHwxNjkzMTEzNTEyfDA&ixlib=rb-4.0.3'
  },
  {
    place : "Jaipur",
    Title : 'Jaipur',
    uri : 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixid=M3w0OTQzMzN8MHwxfHNlYXJjaHwxfHxKYWlwdXJ8ZW58MHwxfHx8MTY5MzEzNzU4MHww&ixlib=rb-4.0.3'
  },
  {
    place : "Mumbai",
    Title : 'Mumbai',
    uri : 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixid=M3w0OTQzMzN8MHwxfHNlYXJjaHwxfHxNdW1iYWl8ZW58MHwxfHx8MTY5MzEzNzc4NXww&ixlib=rb-4.0.3'
  },
  {
    place : "Ooty",
    Title : 'Ooty',
    uri : 'https://images.unsplash.com/photo-1554995328-4f432193aca6?ixid=M3w0OTQzMzN8MHwxfHNlYXJjaHwxfHxPb3R5fGVufDB8MXx8fDE2OTMxMzc4MjJ8MA&ixlib=rb-4.0.3'
  },
]

const Home = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }: { index: number }) => {
    setCurrentIndex(index);
  };
  return (
    <View style={{backgroundColor:'#EFEFEF'}}>
      {/* <Image
        // source={require("../../assets/images/Kasauli.png")}
        source={{uri:'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=M3w0OTQzMzN8MHwxfHNlYXJjaHwxfHxNYW5hbGl8ZW58MHx8fHwxNjkzMTEzNTEyfDA&ixlib=rb-4.0.3'}}
        style={{flex:1,width:"100%",borderBottomRightRadius:36,borderBottomLeftRadius:36}}
      /> */}
    <SwiperFlatList
        vertical={true}
        showPagination={false}
        onChangeIndex={handleChangeIndexValue}
        data={imageData}
        renderItem={({ item, index }) => (
          <Placesscroller item={item} index={index} currentIndex={CurrentIndex} />
        )}
        keyExtractor={(item, index) => index.toString()} // Use index.toString() as the key
      />
       
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})