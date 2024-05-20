import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LoginScreen } from '../Src/Container/Auth';
import { DetailsScreen, MapScreen } from '../Src/Container/Map';
import { MovieScreen } from '../Src/Container/Movie';
import { CustomTabBar } from '../Src/Components/CustomTabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreAllLogs();

export const AuthContext = React.createContext();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Movie" component={MovieScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    );
}

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false
        }}> 
            <Stack.Screen name="map" component={TabNavigator} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

function App() {

    React.useEffect(() => {

        const bootstrapAsync = async () => {
            let view_status;
            try {
                try {
                    await AsyncStorage.setItem('username', 'Demo@gmail.com');
                    await AsyncStorage.setItem('password', '12345678');
                    view_status = await AsyncStorage.getItem('SIGNIN');
                } catch (error) {
                    console.error('Error storing dummy credentials', error);
                }

                if (view_status != null) {
                    console.log('status -----> ', view_status)
                    dispatch({ type: 'SIGNIN', viewStatus: true });
                } else {
                    console.log('FALSE')
                    dispatch({ type: 'SIGN_OUT', viewStatus: false });
                }
            } catch (e) {
            }
        };

        bootstrapAsync();
    }, []);

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SIGNIN':
                    return {
                        ...prevState,
                        isLoading: false,
                        viewStatus: true
                    };
                default:
                    return {
                        ...prevState,
                        isLoading: false,
                        viewStatus: false
                    };
            }
        }, {
        isLoading: true,
        viewStatus: undefined
    });

    const authContext = React.useMemo(() => ({
        onSignOut: () => dispatch({ type: 'SIGN_OUT', viewStatus: false }),
        onSignIn: async data => {
            dispatch({ type: 'SIGNIN', viewStatus: true });
        },
    }), []);

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="login" screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false
                }}>
                    {
                        state.isLoading == false &&
                            state.viewStatus == false ?
                            <Stack.Screen name="login" component={LoginScreen} />
                            :
                            <Stack.Screen name="main" component={MainStack} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;