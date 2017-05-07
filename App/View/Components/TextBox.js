'use strict';

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../../Resources/Styles";

class TextBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>
                <Text
                    style={[
                        styles.contentText,
                        {display: this.props.display || 'flex'}
                    ]}>{this.props.title}</Text>
            </View>
        );
    }
}

export default TextBox;