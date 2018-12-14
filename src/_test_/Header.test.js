import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Header from "../component/Header";

test('Header components snapshot', () => {
    const component = renderer.create(
        <Header />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});
