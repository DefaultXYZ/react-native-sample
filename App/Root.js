'use strict';

import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import styles from "./Resources/Styles";
import globals from "./Resources/Globals";
import MainNavigation from "./Navigation/MainNavigation";

class Root extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={globals.primaryColor}/>
                <MainNavigation/>
            </View>
        );
    }
}

export default Root;