import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Root from "../App/Root";

it('renders correctly', () => {
    const tree = renderer.create(
        <Root />
    );
});