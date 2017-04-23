'use strict';

import React, {Component} from "react";
import {Button, View} from "react-native";
import TextBox from "../Components/TextBox";
import ButtonBox from "../Components/ButtonBox";
import styles from "../Resources/Styles";
import globals from "../Resources/Globals";

export default class TextVisibilityScene extends Component {

    constructor(props) {
        super(props);
        this.state = {visibility: false};
    }

    handleButtonClick() {
        this.setState({visibility: !this.state.visibility});
    }

    toMain() {
        this.props.navigator.pop();
    }

    render() {
        let displayProperty = this.state.visibility ? 'flex' : 'none';
        return (
            <View style={styles.container}>
                <TextBox visibility={displayProperty}/>
                <ButtonBox onClick={() => this.handleButtonClick()}/>
                <Button
                    title='Back'
                    onPress={() => this.toMain()}
                    color={globals.primaryColor}/>
            </View>
        );
    }
}