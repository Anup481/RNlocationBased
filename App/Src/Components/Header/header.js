import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Styles, CONSTANTS, COLORS } from '../../../Themes';

export default function MenuBar(props) {
	return (
		<View style={[
			Styles.backgroundColorPrussianBlue,
			Styles.row,
			Styles.paddingHorizontal16,
			Styles.paddingVertical16,
			props.type != 2 && Styles.spaceBetween,
		]}>
			{
				(props.type == 2) &&
				<TouchableOpacity onPress={() => props.onPress()}>
					<Icon name='arrow-back'
						size={CONSTANTS.Width16}
						color={COLORS.WHITE} />
				</TouchableOpacity>
			}
			<Text style={[Styles.fontSize18, Styles.colorWhite, Styles.paddingLeft16]}>{props.title}</Text>

			{
				(props.type != 2) &&
				<TouchableOpacity hitSlop={CONSTANTS.normalHitSlop}
					onPress={() => props.onPress()}>
					<Icon name='log-out' size={CONSTANTS.Width16}
						color={COLORS.WHITE} />
				</TouchableOpacity>
			}
		</View>
	);
}