'use strict';

import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import styles from "../Resources/Styles";

export default class SecondaryScreen extends Component {

    navigateToMainScreen() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>Hey, it is secondary screen!</Text>
                <Button title='Go to Main' onPress={() => this.navigateToMainScreen()}/>
            </View>
        );
    }
}