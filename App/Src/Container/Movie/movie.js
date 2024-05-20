import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Styles } from "../../../Themes";
import { StatusBar } from "../../Components/StatusBar";
import { Header } from "../../Components/Header";
import service from '../../../Services/service';
import { MovieCard } from "../../Components/Card";
import { Loader } from "../../Components/Activity-indicator";
import { SignOutModal } from "../../Components/Modal";
import { AuthContext } from "../../../Navigation/router";
import { useNavigation } from "@react-navigation/native";

const MovieScreen = () => {

    const navigation = useNavigation();

    const { onSignOut } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [signoutModal, setSignOutModal] = useState(false);

    useEffect(() => {
        _getMovieList();
    }, []);

    // API - get movies list
    const _getMovieList = async () => {
        try {
            let res = await service();

            setMovies(res);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err)
        }
    }

    const _handleSignOut = () => {
        setSignOutModal(true);
    }

    const _handleLogout = async (data) => {
        if (data) {
            try {
                AsyncStorage.getAllKeys()
                    .then(keys => AsyncStorage.multiRemove(keys))
                    .then(async () => {
                        onSignOut();
                        setSignOutModal(false);
                        await AsyncStorage.setItem('username', 'Demo@gmail.com');
                        await AsyncStorage.setItem('password', '12345678');
                        console.log('Keys removed successfully');
                    });

            } catch (error) {
                console.error('Error removing keys', error);
            }
        } else {
            setSignOutModal(false);
        }
    }

    return (
        <SafeAreaView style={[Styles.flexOne, Styles.backgroundColorIceberg]}>

            {/* status bar */}
            <StatusBar />

            {/* header of a screen */}
            <Header title='Movies'
                onPress={_handleSignOut} />

            {
                (loading) ?
                    <Loader />
                    :
                    <>
                        <View style={[Styles.paddingTop16, Styles.paddingBottom16, Styles.paddingHorizontal16]}>
                            <Text style={[Styles.fontSize16, Styles.lineHeight18, Styles.colorBlack]}>
                                Movies List
                            </Text>
                        </View>

                        <FlatList data={movies}
                            bounces={false}
                            contentContainerStyle={[Styles.paddingTop4, Styles.paddingHorizontal16]}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ index, item }) => {
                                return (
                                    <View key={index}>
                                        <MovieCard data={item} />
                                    </View>
                                )
                            }}
                        />
                    </>
            }

            {
                (signoutModal) &&
                <SignOutModal show={signoutModal}
                    onPress={_handleLogout} />
            }
        </SafeAreaView>
    )
}

export default MovieScreen;