'use strict';

import React, {Component} from "react";
import {Button, View} from "react-native";
import styles from "../Resources/Styles";
import globals from '../Resources/Globals';

class ButtonBox extends Component {

    render() {
        return (
            <View style={styles.buttonBox}>
                <Button
                    color={globals.primaryColor}
                    title="Click me"
                    onPress={this.props.onClick}/>
            </View>
        );
    }
}

export default ButtonBox;