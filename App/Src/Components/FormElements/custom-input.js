import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, CONSTANTS, Styles } from '../../../Themes';

const CustomTextInput = (props) => {
    // { placeholder, value, onChangeText, error, password }
    const [passwordShow, setPasswordShow] = useState(false)

    // show password
    function _showPassword() {
        setPasswordShow(!passwordShow);
    }

    return (
        <View>
            <TextInput style={[Styles.height40, Styles.borderColorLynch, Styles.colorBlack,
            Styles.borderBottomWidth1, Styles.marginBottom12, Styles.paddingHorizontal10]}
                // placeholderTextColor={COLORS.BLACK}
                // placeholder={placeholder}
                // value={value}
                // onChangeText={onChangeText}
                secureTextEntry={passwordShow}
                onSubmitEditing={props.onSubmitEditing}
                ref={props.ref}
                placeholderTextColor={COLORS.BLACK}
                {...props}
            />

            {/* password icon */}
            {
                (props.password) &&
                <TouchableOpacity style={[Styles.positionAbsolute, Styles.applyWrapper, Styles.marginRight16, Styles.justifyCenter, Styles.heightOnWidth40, Styles.paddingHorizontal161,
                {
                    right: CONSTANTS.Width4,
                    top: CONSTANTS.Width4
                }]}
                    activeOpacity={CONSTANTS.activeOpacity}
                    onPress={() => _showPassword()}>
                    {
                        (!passwordShow) ?
                            <Icon name="eye"
                                size={CONSTANTS.Width16}
                                color={COLORS.BLACK} />
                            :
                            <Icon name="eye-off"
                                size={CONSTANTS.Width16}
                                color={COLORS.BLACK} />
                    }
                </TouchableOpacity>
            }

            {/* error */}
            <View style={[Styles.heightOnWidth24, Styles.paddingTop4, Styles.paddingBottom8]}>
                {
                    (props.error.length != 0) ?
                        <Text style={[Styles.normal, Styles.fontSize10, Styles.colorRed, Styles.lineHeight12]}>
                            {'* '}{props.error}
                        </Text>
                        :
                        null
                }
            </View>
        </View>
    );
};

export default CustomTextInput;