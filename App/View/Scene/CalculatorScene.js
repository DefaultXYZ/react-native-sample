'use strict';

import React, {Component} from "react";
import {Button, TextInput, ToastAndroid, View} from "react-native";
import TextBox from "../Components/TextBox";
import ButtonBox from "../Components/ButtonBox";
import styles, {colors} from "../../Resources/Styles";

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonStyle = {
            flex: 1,
            padding: 2
        };
        return (
            <View style={buttonStyle}>
                <Button
                    color={colors.primaryColor}
                    title={this.props.title}
                    onPress={this.props.onPress}/>
            </View>
        );
    }
}

class Numbers extends Component {

    onDivide = () => {
        ToastAndroid.show('Divide button clicked', ToastAndroid.SHORT);
    };

    onMultiply = () => {
        ToastAndroid.show('Multiply button clicked', ToastAndroid.SHORT);
    };

    onSubtract = () => {
        ToastAndroid.show('Subtract button clicked', ToastAndroid.SHORT);
    };

    onEquals = () => {
        ToastAndroid.show('Equal button clicked', ToastAndroid.SHORT);
    };

    onAdd = () => {
        ToastAndroid.show('Add button clicked', ToastAndroid.SHORT);
    };

    render() {
        const containerStyle = {
            flex: 1,
            flexDirection: 'column',
        };
        const rowStyle = {
            flexDirection: 'row',
            alignItems: 'stretch'
        };
        return (
            <View style={containerStyle}>
                <View style={rowStyle}>
                    <CustomButton title="+" onPress={this.onAdd}/>
                    <CustomButton title="-" onPress={this.onSubtract}/>
                    <CustomButton title="*" onPress={this.onMultiply}/>
                    <CustomButton title="/" onPress={this.onDivide}/>
                    <CustomButton title="=" onPress={this.onEquals}/>
                </View>
            </View>
        );
    }
}

export default class CalculatorScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleText: '',
            text: ''
        };
    }

    toMain() {
        this.props.navigator.pop();
    }

    submitText(text) {
        this.setState({text})
    }

    displayText() {
        this.setState((prevState) => ({
            visibleText: prevState.text
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    keyboardType='numeric'
                    style={{backgroundColor: 'white'}}
                    onChangeText={(text) => this.submitText(text)}/>
                <TextBox
                    title={this.state.visibleText}/>
                <Numbers/>
                <ButtonBox
                    title='Receive Text'
                    onClick={() => this.displayText()}/>
                <ButtonBox
                    title='Back'
                    onClick={() => this.toMain()}/>
            </View>
        );
    }
}