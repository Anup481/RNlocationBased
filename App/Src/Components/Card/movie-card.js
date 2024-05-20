import React from "react";
import { Image, TouchableOpacity, View, Text, Linking } from 'react-native';
import { Styles } from "../../../Themes";

const MovieCard = (props) => {
    let { id, image, imdb_url, movie, rating } = props.data;

    const _handleLink = async () => {
        try {
            const supported = await Linking.canOpenURL(imdb_url);

            if (supported) {
                await Linking.openURL(imdb_url);
            } else {
                console.error("Don't know how to open URL: " + imdb_url);
            }
        } catch (error) {
            console.error('Error opening URL:', error);
        }
    }

    return (
        <TouchableOpacity style={[Styles.flexOne, Styles.marginBottom16, Styles.borderRadius8, Styles.backgroundColorWhite, Styles.shadow, Styles.paddingHorizontal16, Styles.paddingVertical16]}
            onPress={_handleLink}>
            <Text style={[Styles.fontSize14, Styles.lineHeight16, Styles.colorBlack, Styles.bold]}>{movie}</Text>
            <Text style={[Styles.paddingTop4, Styles.fontSize12, Styles.lineHeight13, Styles.colorBlack]}>Rating: {rating}</Text>
        </TouchableOpacity>
    )
}

export default MovieCard;