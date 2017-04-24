'use strict';

import React, {Component} from "react";
import {Navigator} from "react-native";
import TextVisibilityScene from "../Scene/TextVisibilityScene";
import MainScene from "../Scene/MainScene";
import CounterScene from "../Scene/CounterScene";

export const scenes = {
    MainScene: 0,
    TextVisibilityScene: 1,
    CounterScene: 2
};

export default class MainNavigation extends Component {

    static navigatorRenderScene(route, navigator) {
        if (route.id === scenes.MainScene) {
            return <MainScene navigator={navigator}/>;
        }
        if (route.id === scenes.TextVisibilityScene) {
            return <TextVisibilityScene navigator={navigator}/>;
        }
        if (route.id === scenes.CounterScene) {
            return <CounterScene navigator={navigator}/>
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: scenes.MainScene}}
                renderScene={MainNavigation.navigatorRenderScene}
            />
        );
    }
}