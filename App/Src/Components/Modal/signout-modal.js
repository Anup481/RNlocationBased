import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { COLORS, CONSTANTS, Styles } from '../../../Themes';
import Icon from 'react-native-vector-icons/Ionicons'
import { CustomButton } from '../Button';

const SignOutModal = (props) => {
    const [modalVisible, setModalVisible] = useState(props.show);

    useEffect(() => {
        setModalVisible(props.show);
    }, [props.show]);

    return (
        <Modal animationType={'fade'}
            statusBarTranslucent
            transparent={true}
            visible={modalVisible}>

            {/* close modal */}
            <TouchableWithoutFeedback
                onPress={() => props.onPress(false)}>
                <View style={[Styles.flexOne, Styles.backgroundColorTransparent]} />
            </TouchableWithoutFeedback>

            <View style={[Styles.width, Styles.backgroundColorWhite, Styles.borderTopRightRadius24, Styles.borderTopLeftRadius24, Styles.positionAbsoluteBottom, Styles.paddingVertical16]}>

                <View style={[Styles.marginTop12, Styles.center]}>
                    <Icon name="close"
                        size={CONSTANTS.Width24}
                        color={COLORS.SLATE_GREY} />
                </View>

                <TouchableOpacity style={[Styles.center, Styles.marginTop12, Styles.row, Styles.paddingHorizontal16]}
                    onPress={() => props.onPress(false)}>

                    <Text style={[Styles.fontSize18, Styles.bold, Styles.colorBlack]}>
                        Do you really want to logout?
                    </Text>
                </TouchableOpacity>

                <View style={[Styles.marginTop24, Styles.paddingBottom24, Styles.paddingHorizontal16, Styles.row]}>
                    <View style={[Styles.flexOne, Styles.paddingRight8]}>
                        <CustomButton label="Yes"
                            onPress={() => props.onPress(true)} />
                    </View>
                    <View style={[Styles.flexOne, Styles.paddingLeft8]}>
                        <CustomButton label="No"
                            onPress={() => props.onPress(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default SignOutModal;
