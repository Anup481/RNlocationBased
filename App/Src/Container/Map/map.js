import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import { Styles } from "../../../Themes";

const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

const markersData = [
    {
        id: 1,
        title: 'Location 1',
        description: 'Description for location 1',
        coordinate: { latitude: 37.78825, longitude: -122.4324 }
    },
    {
        id: 2,
        title: 'Location 2',
        description: 'Description for location 2',
        coordinate: { latitude: 37.75825, longitude: -122.4524 }
    },
];

const MapScreen = () => {

    const navigation = useNavigation();

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const _handleMarkerPress = (marker) => {
        setSelectedMarker(marker);
        setIsBottomSheetOpen(true);
        this.panel.togglePanel();
    }

    return (
        <SafeAreaView style={[Styles.flexOne, Styles.justifyFlexEnd, Styles.alignItemsCenter]}>
            <MapView provider={PROVIDER_GOOGLE}
                style={[Styles.flexOne, styles.map]}
                initialRegion={initialRegion}>
                {markersData.map(marker => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        onPress={() => _handleMarkerPress(marker)}
                    />
                ))}
            </MapView>

            {selectedMarker && (
                <BottomSheet ref={(ref) => { this.panel = ref; }} isOpen={isBottomSheetOpen}
                    onClose={() => setIsBottomSheetOpen(false)}>
                    <View style={Styles.padding16}>
                        <Text style={[Styles.fontSize18, Styles.bold]}>{selectedMarker.title}</Text>
                        <Text style={[Styles.fontSize16, Styles.marginBottom16]}>{selectedMarker.description}</Text>
                        <TouchableOpacity
                            style={[Styles.backgroundColorPrimary, Styles.padding10, Styles.borderRadius8]}
                            onPress={() => navigation.navigate('Details', { marker: selectedMarker })}>
                            <Text style={[Styles.fontSize16, Styles.colorWhite]}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapScreen;