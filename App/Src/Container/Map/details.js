import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../Components/Header';
import { StatusBar } from '../../Components/StatusBar';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
    const { marker } = route.params;

    const navigation = useNavigation();

    const _handleBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={[Styles.flexOne]}>

            <Header type={2}
                title={'Map Details'}
                onPress= {_handleBack}/>
            <StatusBar />

            <View style= {[Styles.center, Styles.padding16]}>
                <Text style={[Styles.fontSize24, Styles.bold, Styles.marginBottom16]}>{marker.title}</Text>
                <Text style={[Styles.fontSize16]}>{marker.description}</Text>
            </View>
        </SafeAreaView>
    );
};

export default DetailsScreen;
