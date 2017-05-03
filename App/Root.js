'use strict';

import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import styles, {colors} from "./Resources/Styles";
import MainNavigation from "./View/Navigation/MainNavigation";

class Root extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.primaryColor}/>
                <MainNavigation/>
            </View>
        );
    }
}

export default Root;