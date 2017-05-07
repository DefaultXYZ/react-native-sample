'use strict';

import React, {Component} from "react";
import {Button, TextInput, View} from "react-native";
import TextBox from "../Components/TextBox";
import ButtonBox from "../Components/ButtonBox";
import styles, {colors} from "../../Resources/Styles";
import {createStore} from "redux";
import Calculator from "../../Model/Calculator";

const ADD = 'ADD',
    SUBTRACT = 'SUBTRACT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
    SUM = 'SUM';

const initialState = {
    a: 0,
    b: 0,
    result: 0,
    action: ''
};

const getSum = (action, a, b) => {
    const calc = new Calculator(a, b);
    switch (action) {
        case ADD:
            calc.add();
            return calc.c;
        case SUBTRACT:
            calc.subtract();
            return calc.c;
        case MULTIPLY:
            calc.multiply();
            return calc.c;
        case DIVIDE:
            calc.divide();
            return calc.c;
        default:
            return a;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                a: action.a,
                action: ADD
            });
        case SUBTRACT:
            return Object.assign({}, state, {
                a: action.a,
                action: SUBTRACT
            });
        case MULTIPLY:
            return Object.assign({}, state, {
                a: action.a,
                action: MULTIPLY
            });
        case DIVIDE:
            return Object.assign({}, state, {
                a: action.a,
                action: DIVIDE
            });
        case SUM:
            let result = getSum(state.action, state.a, action.b);
            return Object.assign({}, state, {
                b: action.b,
                result: result
            });
        default:
            return state;
    }
};

const store = createStore(reducer);

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
                    <CustomButton title="+" onPress={this.props.onAdd}/>
                    <CustomButton title="-" onPress={this.props.onSubtract}/>
                    <CustomButton title="*" onPress={this.props.onMultiply}/>
                    <CustomButton title="/" onPress={this.props.onDivide}/>
                    <CustomButton title="=" onPress={this.props.onEquals}/>
                </View>
            </View>
        );
    }
}

export default class CalculatorScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: '',
            ...store.getState()
        };
    }

    toMain() {
        this.props.navigator.pop();
    }

    onDivide = () => {
        let a = parseInt(this.state.input);
        store.dispatch({type: DIVIDE, a: a});
        this.setState({output: ''});
    };

    onMultiply = () => {
        let a = parseInt(this.state.input);
        store.dispatch({type: MULTIPLY, a: a});
        this.setState({output: ''});
    };

    onSubtract = () => {
        let a = parseInt(this.state.input);
        store.dispatch({type: SUBTRACT, a: a});
        this.setState({output: ''});
    };

    onAdd = () => {
        let a = parseInt(this.state.input);
        store.dispatch({type: ADD, a: a});
        this.setState({output: ''});
    };

    onEquals = () => {
        let b = parseInt(this.state.input);
        store.dispatch({type: SUM, b: b});
        this.setState({output: '', ...store.getState()});
    };

    render() {
        return (
            <View style={styles.container}>
                <TextBox
                    title={this.state.result}/>
                <TextInput
                    value={this.state.output}
                    keyboardType='numeric'
                    style={{backgroundColor: 'white'}}
                    onChangeText={(text) => {
                        this.setState({input: text, output: text})
                    }}/>
                <Numbers
                    onAdd={this.onAdd}
                    onSubtract={this.onSubtract}
                    onMultiply={this.onMultiply}
                    onDivide={this.onDivide}
                    onEquals={this.onEquals}/>
                <ButtonBox
                    title='Back'
                    onClick={() => this.toMain()}/>
            </View>
        );
    }
}