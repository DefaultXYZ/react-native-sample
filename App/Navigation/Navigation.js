'use strict';

import React, {Component} from "react";
import {Navigator} from "react-native";
import MainScreen from "./MainScreen";
import SecondaryScreen from "./SecondaryScreen";

export default class NavigationApp extends Component {

    static navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'MainScreen':
                return <MainScreen navigator={navigator}/>;
            case 'SecondaryScreen':
                return <SecondaryScreen navigator={navigator}/>;
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'MainScreen'}}
                renderScene={NavigationApp.navigatorRenderScene}
            />
        );
    }
}