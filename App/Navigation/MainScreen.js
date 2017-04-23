'use strict';

import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import styles from "../Resources/Styles";

export default class MainScreen extends Component {

    navigateToSecondaryScreen() {
        this.props.navigator.push({
            id: 'SecondaryScreen'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>Hello, it is main screen!</Text>
                <Button onPress={() => this.navigateToSecondaryScreen()} title="Secondary Screen"/>
            </View>
        );
    }
}