'use strict';

import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet} from "react-native";

const text = {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    content: {
        flex: 9,
        justifyContent: 'center'
    },
    footer: {
        flex: 1
    },
    headerText: {
        ...text,
        fontSize: 42
    },
    contentText: {
        ...text,
        fontSize: 18
    },
    footerText: {
        ...text,
        flex: 1,
        marginBottom: 5,
        fontSize: 12,
        textAlignVertical: 'bottom'
    }
});

export default class MainApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.headerText}>Hello#_#World</Text>
                    <Text style={styles.contentText}>It is sample application.</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Powered by React Native Framework.</Text>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('SampleApplication', () => MainApp);
