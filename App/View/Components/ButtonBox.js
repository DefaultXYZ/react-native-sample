'use strict';

import React, {Component} from "react";
import {Button, View} from "react-native";
import styles, {colors} from "../../Resources/Styles";

class ButtonBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.buttonBox, this.props.style]}>
                <Button
                    color={colors.primaryColor}
                    title={this.props.title || "Click me"}
                    onPress={this.props.onClick}/>
            </View>
        );
    }
}

export default ButtonBox;