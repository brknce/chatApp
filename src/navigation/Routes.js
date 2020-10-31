/* 
This file is going to contain all the stacks that the app is going to have, but for now, the auth stack.
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

export default function Routes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}