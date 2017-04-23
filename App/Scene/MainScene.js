'use strict';

import React, {Component} from "react";
import {Button, View} from "react-native";
import globals from "../Resources/Globals";

export default class MainScene extends Component {

    toTextVisibilityScene() {
        this.props.navigator.push({
            id: 'TextVisibilityScene'
        });
    }

    render() {
        return (
            <View>
                <Button
                    title='Text Visibility'
                    onPress={() => this.toTextVisibilityScene()}
                    color={globals.primaryColor}/>
            </View>
        );
    }
}