/*
The react-native-paper UI library, has three modes to display a button.

text: a flat button without background or outline
outlined: a button with the outline
contained: a button with background color and elevation shadow

For different purposes, you are going to make use of different button modes. You will see them in screen components later. 
That is why it is better to accept the value as a prop (as mentioned in the above snippet: modeValue).
*/

import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormButton({ title, modeValue, ...rest }) {
    return (
        <Button
            mode={modeValue}
            {...rest}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        >
            {title}
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    buttonContainer: {
        width: width / 2,
        height: height / 15
    }
});