import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, Styles } from '../../../Themes';

const CustomSearch = ({ placeholder, onSearch }) => {
	const [searchText, setSearchText] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const handleSearch = () => {
		onSearch(searchText);
	};

	return (
		<View style={[Styles.row, Styles.alignItemsCenter, Styles.borderRadius100, Styles.paddingHorizontal10,
		Styles.backgroundColorAshGrey,
		isFocused && Styles.shadow]}>
			<TextInput style={[Styles.flexOne, Styles.colorBlack]}
				placeholderTextColor={COLORS.BLACK}
				placeholder={placeholder}
				value={searchText}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={(text) => onSearch(text)}
			/>
			<View style={[Styles.padding8]} onPress={handleSearch}>
				<Icon name="search" size={20} color="#333" />
			</View>
		</View>
	);
};

export default CustomSearch;
