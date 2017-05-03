'use strict';

import React, {Component} from "react";
import {View} from "react-native";
import {scenes} from "../Navigation/MainNavigation";
import ButtonBox from "../Components/ButtonBox";
import styles from "../../Resources/Styles";

export default class MainScene extends Component {

    toTextVisibilityScene() {
        this.props.navigator.push({
            id: scenes.TextVisibilityScene
        });
    }

    toCounterScene() {
        this.props.navigator.push({
            id: scenes.CounterScene
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonBox
                    title='Text Visibility'
                    onClick={() => this.toTextVisibilityScene()}/>
                <ButtonBox
                    title='Counter'
                    onClick={() => this.toCounterScene()}/>
            </View>
        );
    }
}