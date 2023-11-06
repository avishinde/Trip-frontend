import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import StyledText from './StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DayCard = ({dayNumber, date, activities}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View style={{flexDirection: 'row', maxWidth: '100%'}}>
      <View style={{alignItems: 'center', marginRight: 2}}>
        {/* <View
          style={{
            width: 2,
            backgroundColor: 'blue',
            height: 10,
          }}></View> */}
        <View
          style={{
            height: 19,
            width: 19,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: '#EB545D',
          }}></View>
        <View
          style={{
            width: 2,
            backgroundColor: '#EB545D',

            flex: 1,
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: '#F9F9F9',
          borderRadius: 8,
          width: '100%',
          padding: 12,
          flex: 1,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <StyledText
              style={{
                fontSize: 16,
                lineHeight: 19,
                fontWeight: 'bold',
              }}>
              Day {dayNumber}:
            </StyledText>
            <View
              style={{
                // borderBottomWidth: 1,
                // borderBottomColor: '#EB545D',
                marginLeft: 5,
              }}>
              <StyledText style={{fontWeight: '300', lineHeight: 19}}>
                Give a name
              </StyledText>
            </View>
          </View>
          <TouchableOpacity onPress={toggleCollapse}>
            <MaterialIcons
              name={isCollapsed ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
              size={16}
              color="#818181"
            />
          </TouchableOpacity>
        </View>
        {/* Collapsible content */}
        {!isCollapsed && (
          <View
            style={{
              padding: 12,
              paddingBottom: 0,
            }}>
            {/* Render your list of places here */}
          </View>
        )}
      </View>
    </View>
  );
};

export default DayCard;

const styles = StyleSheet.create({});
