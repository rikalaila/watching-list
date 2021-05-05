import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, SignUp, SignIn, Splash } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: true, 
                    headerTitle :false,
                    headerStyle: {
                        backgroundColor : 'rgb(28, 27, 27)',
                      },
                    headerTintColor : 'rgb(247, 156, 59)',
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;