'use strict';

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import Root from "./App/Root";

export default class MainApp extends Component {
    render() {
        return (
            <Root/>
        );
    }
}

AppRegistry.registerComponent('SampleApplication', () => MainApp);