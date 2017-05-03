'use strict';

import React, {Component} from "react";
import {Button, View} from "react-native";
import styles, {colors} from "../../Resources/Styles";

class ButtonBox extends Component {

    render() {
        return (
            <View style={styles.buttonBox}>
                <Button
                    color={colors.primaryColor}
                    title={this.props.title || "Click me"}
                    onPress={this.props.onClick}/>
            </View>
        );
    }
}

export default ButtonBox;