import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

/* 
A Stack Navigator provides the React Native app to transit between different screens similar to how the navigation 
in a web browser works. It pushes or pops a screen when in the navigational state.
*/

const Stack = createStackNavigator();

/* 
The createStackNavigator is a function used to implement a stack navigation pattern. 
This function returns two React components: Screen and Navigator, that help us configure each component screen as shown below.
*/

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}

