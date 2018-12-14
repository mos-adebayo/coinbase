import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import DataTable from "../component/DataTable";

const coinItems = [];

test('Datatable components snapshot', () => {
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
