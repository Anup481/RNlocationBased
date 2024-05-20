import React from "react";
import { View, ActivityIndicator } from 'react-native'
import { COLORS, Styles } from "../../../Themes";

const Loader = () => {
    return (
        <View style= {[Styles.flexOne, Styles.center]}>
            <ActivityIndicator size={'large'} color={COLORS.BRILLIANT_ROSE}/>
        </View>
    )
}

export default Loader;