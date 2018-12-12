import React from "react";
import ReactDOM from "react-dom";
// import { configure, shallow } from "enzyme";
import renderer from 'react-test-renderer';

import Header from "../component/Header";

//Enzyme Configurations
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

test('Header components snapshots test', () => {
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
