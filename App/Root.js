'use strict';

import React, {Component} from "react";
import {View, StatusBar} from "react-native";
import TextBox from "./Components/TextBox";
import ButtonBox from "./Components/ButtonBox";
import styles from "./Resources/Styles";
import globals from "./Resources/Globals";

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {visibility: false};
    }

    handleButtonClick() {
        this.setState({visibility: !this.state.visibility});
    }

    render() {
        let displayProperty = this.state.visibility ? 'flex' : 'none';
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={globals.primaryColor}/>
                <TextBox visibility={displayProperty}/>
                <ButtonBox onClick={() => this.handleButtonClick()}/>
            </View>
        );
    }
}

export default Root;