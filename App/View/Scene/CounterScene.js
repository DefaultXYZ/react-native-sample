'use strict';

import React, {Component} from "react";
import {View} from "react-native";
import TextBox from "../Components/TextBox";
import ButtonBox from "../Components/ButtonBox";
import styles from "../../Resources/Styles";

export default class CounterScene extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleButtonClick() {
        let count = this.state.count;
        count++;
        this.setState({count: count});
    }

    toMain() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextBox title={"Clicked: " + this.state.count + " times"} />
                <ButtonBox onClick={() => this.handleButtonClick()}/>
                <ButtonBox
                    title='Back'
                    onClick={() => this.toMain()}/>
            </View>
        );
    }
}