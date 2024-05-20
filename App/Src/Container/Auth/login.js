import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CustomTextInput } from '../../Components/FormElements';
import { Styles } from '../../../Themes';
import { StatusBar } from '../../Components/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../../Components/Button';
import { AuthContext } from '../../../Navigation/router';

const LoginScreen = () => {
    const navigation = useNavigation();
    const { onSignIn } = useContext(AuthContext);

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [focusId, setFocusId] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    useEffect(() => {
        if (email.length !== 0) {
            setEmailError('');
        }
    }, [email]);

    useEffect(() => {
        if (password.length !== 0) {
            setPassError('');
        }
    }, [password]);

    const _onFocusAnimation = data => {
        setFocusId(data);
    };

    const _onBlurAnimation = () => {
        setFocusId('');
    };

    const _handleLogin = async () => {
        const valid = await _validate();
        if (valid == true) {
            setLoading(true);
            _login();
        }
    };

    const _validate = async () => {

        const storedUsername = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('password');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.length === 0) {
            emailRef.current && passRef.current.focus()
            setEmailError('Email cannot be empty');
            return false;
        } else if (storedUsername != email) {
            emailRef.current && passRef.current.focus()
            setEmailError('Invalid Email');
            return false;
        } else if (!emailRegex.test(email)) {
            emailRef.current && passRef.current.focus()
            setEmailError('Invalid Email');
            return false;
        } else if (password.length < 4) {
            passRef.current && passRef.current.focus()
            setPassError('Password must be at least 4 characters');
            return false;
        } else if (storedPassword != password) {
            passRef.current && passRef.current.focus()
            setPassError('Password does not match');
            return false;
        }

        return true;
    };

    const _login = async () => {
        try {
            await AsyncStorage.setItem('SIGNIN', JSON.stringify(true));
            onSignIn();
            navigation.replace('main');
        } catch (err) {
            console.log('failed lo signin');
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={[Styles.flexOne, Styles.backgroundColorWhite]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[Styles.flexOne]}>
                <StatusBar />
                <ScrollView keyboardShouldPersistTaps= 'handled'
                    bounces={false} contentContainerStyle={[Styles.flexGrowOne, Styles.justifyCenter, Styles.paddingHorizontal16]}>
                    <Text style={[Styles.fontSize24, Styles.bold, Styles.colorBlack]}>Welcome!</Text>
                    <Text style={[Styles.paddingTop10, Styles.fontSize16, Styles.bold, Styles.colorLynch]}>
                        Please login or sign up to continue our app
                    </Text>
                    <View style={[Styles.paddingTop40]}>
                        <CustomTextInput
                            id="email"
                            placeholder="Email"
                            onSubmitEditing={() => passRef.current && passRef.current.focus()}
                            ref={emailRef}
                            onFocus={() => _onFocusAnimation('email')}
                            onEndEditing={_onBlurAnimation}
                            blurOnSubmit={false}
                            error={emailError}
                            type="default"
                            returnKeyType="next"
                            maxLength={30}
                            apply={false}
                            password={false}
                            focusId={focusId}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={[Styles.paddingTop16]}>
                        <CustomTextInput
                            id="pass"
                            placeholder="Password"
                            onSubmitEditing={() => passRef.current && passRef.current.blur()}
                            ref={passRef}
                            onFocus={() => _onFocusAnimation('pass')}
                            onEndEditing={_onBlurAnimation}
                            blurOnSubmit={false}
                            error={passError}
                            type="default"
                            returnKeyType="done"
                            maxLength={15}
                            apply={false}
                            password
                            focusId={focusId}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={[Styles.paddingTop24]}>
                        <CustomButton label="Login" loading={loading} onPress={_handleLogin} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;
