'use strict';

import React, {Component} from "react";
import {Navigator} from "react-native";
import TextVisibilityScene from "../Scene/TextVisibilityScene";
import MainScene from "../Scene/MainScene";

export default class MainNavigation extends Component {

    static navigatorRenderScene(route, navigator) {
        if (route.id === 'MainScene') {
            return <MainScene navigator={navigator}/>;
        }
        if (route.id === 'TextVisibilityScene') {
            return <TextVisibilityScene navigator={navigator}/>;
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'MainScene'}}
                renderScene={MainNavigation.navigatorRenderScene}
            />
        );
    }
}