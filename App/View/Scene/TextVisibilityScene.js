'use strict';

import React, {Component} from "react";
import {View} from "react-native";
import TextBox from "../Components/TextBox";
import ButtonBox from "../Components/ButtonBox";
import styles from "../../Resources/Styles";

export default class TextVisibilityScene extends Component {

    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    handleButtonClick() {
        let title = this.state.title === '' ? 'Hello#_#World' : '';
        this.setState({title});
    }

    toMain() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextBox
                    style={{flex: 9}}
                    title={this.state.title}/>
                <ButtonBox onClick={() => this.handleButtonClick()}/>
                <ButtonBox
                    title='Back'
                    onClick={() => this.toMain()}/>
            </View>
        );
    }
}