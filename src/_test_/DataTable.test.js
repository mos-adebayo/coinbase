import React from "react";
import ReactDOM from "react-dom";
// import { configure, shallow } from "enzyme";
import renderer from 'react-test-renderer';

import DataTable from "../component/DataTable";

//Enzyme Configurations
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

const coinItems = [];

test('Datatable components snapshots test', () => {
    const component = renderer.create(
        <DataTable coinItems={coinItems} handleFetchCoinItem={()=>{}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataTable coinItems={coinItems} handleFetchCoinItem={()=>{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
