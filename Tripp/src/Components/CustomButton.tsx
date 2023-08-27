import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle , Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  customStyle?: ViewStyle; // Define the prop for custom style
  Buttonstyle?: ViewStyle; // Define the prop for custom style
  fontSize?: number; 
  buttonWidth?: string;
  showIcon?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, disabled, customStyle, buttonWidth = '100%' ,fontSize = 16,showIcon = false, }) => {
  const buttonStyle = disabled ? styles.inactiveButton : styles.activeButton;
  const textStyle = disabled ? styles.inactiveButtonText : styles.activeButtonText;

  const gradientColors = disabled
    ? ['#EE5D66', '#E8444E']
    : ['#EE5D66', '#EC2431'];

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}  style={{ width: buttonWidth } as ViewStyle}>
      <LinearGradient
        style={[styles.button, buttonStyle, customStyle]}
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.buttonText, textStyle,{ fontSize }]}>{title}</Text>
        {showIcon && <Image source={require("../assets/images/right-arrow.png")} style={{width:34,height:14,marginLeft:10}} />}
      </LinearGradient>
    </TouchableOpacity>
  );
}
export const LoginButton: React.FC<CustomButtonProps> = (props) => {
   return (
     <CustomButton
       {...props}
       customStyle={{ borderRadius: 50, paddingVertical: 16 }}
       fontSize={18}
       buttonWidth="60%"
     />
   );
 }

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  activeButton: {
    // No need to specify a background color here since LinearGradient handles it
  },
  inactiveButton: {
    // No need to specify a background color here since LinearGradient handles it
    opacity: 0.6,
  },
  buttonText: {
    color: 'white', // Use your white color
    fontSize: 16,
    lineHeight:22,
    fontFamily : "SF-Pro-Display-Regular"
  },
  activeButtonText: {
    color: 'white', // Use your white color
  },
  inactiveButtonText: {
    color: 'white', // Use your white color
     // Reduced opacity for inactive state
  },
});

export default CustomButton;
