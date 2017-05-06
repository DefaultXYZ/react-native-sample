'use strict';

import React from "react";
import {StyleSheet} from "react-native";

const text = {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'black',
        padding: 12
    },
    largeText: {
        ...text,
        fontSize: 36
    },
    contentText: {
        ...text,
        fontSize: 24
    },
    buttonBox: {
        padding: 5
    }
});

export const colors = {
    primaryColor: '#22a5e2'
};

export default styles;