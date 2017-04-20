'use strict';

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../Resources/Styles";

class TextBox extends Component {

    render() {
        return (
            <View style={styles.textBox}>
                <Text style={styles.largeText}>Hello#_#World</Text>
                <Text style={[styles.contentText, {display: this.props.visibility}]}>Clicked</Text>
            </View>
        );
    }
}

export default TextBox;