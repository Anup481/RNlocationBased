import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { COLORS, CONSTANTS, Styles } from '../../../Themes';

const CustomButton = ({ onPress, label, loading }) => {
  return (
    <TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
    style={[Styles.flexOne, loading == true ? [Styles.row, Styles.backgroundColorCloudGrey] : Styles.backgroundColorBlack,
    Styles.paddingVertical12, Styles.borderRadius100, Styles.center]}
      disabled={loading}
      onPress={onPress}>
      {
        (loading == true) &&
        <ActivityIndicator size={'small'}
          style={[Styles.paddingRight8]}
          color={COLORS.WHITE} />
      }
      <Text style={[Styles.colorWhite, Styles.fontSize16, Styles.bold]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
