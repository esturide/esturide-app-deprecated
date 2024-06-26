import React from 'react';
import style from '@/styles/InputButtons'
import {Text, TouchableOpacity, View} from "react-native";

interface InputButtonProps {
  /**
   * What type button?
   */
  typeButton: 'depositBlue' | 'depositGreen' | 'submit' | 'withdraw';
  /**
   * InputButton contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const InputButton = ({
                              typeButton,
                              label,
                              ...props
                            }: InputButtonProps) => {
  const buttonStyles = {
    depositBlue: [style.btnDepositBlue, style.btnDepositBlueText],
    depositGreen: [style.btnDepositGreen, style.btnDepositGreenText],
    submit: [style.btnSubmit, style.btnSubmitText],
    withdraw: [style.btnWithdraw, style.btnWithdrawText],
  };

  const buttonStyle = buttonStyles[typeButton][0];
  const textStyle = buttonStyles[typeButton][1];

  return (
    <TouchableOpacity {...props}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}
