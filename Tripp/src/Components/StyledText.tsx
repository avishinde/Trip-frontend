import React, { FC, ReactNode } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface StyledTextProps extends TextProps {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  fontWeight?:string;
  children: ReactNode;
}

const StyledText: FC<StyledTextProps> = ({
  fontFamily = 'SF-Pro-Display-Regular',
  fontSize = 16,
  lineHeight = 19,
  fontWeight = "300",
  color = '#4F4F4F',
  style,
  children,
  ...restProps
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily,
      fontSize,
      lineHeight,
      color,
      
    },
  });

  return (
    <Text style={[styles.text, style]} {...restProps}>
      {children}
    </Text>
  );
};

export default StyledText;
