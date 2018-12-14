import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { configure, shallow } from "enzyme";
import App from "../component/App";

//Enzyme Configurations
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('App components snapshots test', () => {
    const component = renderer.create(
        <App/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('Coin item modal opens', () => {
    const AppRender = shallow(<App/>);
    const AppRenderInstance = AppRender.instance();
    expect(AppRender.state('modalIsOpen')).toBeFalsy(); //default state of modal
    AppRenderInstance.fetchCoinItem({}); //trigger function to show modal
    expect(AppRender.state('modalIsOpen')).toBeTruthy(); //resultant state of modal

});

test('Coin item modal dismiss successfully', () => {
    const AppRender = shallow(<App/>);
    const AppRenderInstance = AppRender.instance();
    expect(AppRender.state('modalIsOpen')).toBeFalsy(); //default state of modal
    AppRenderInstance.fetchCoinItem({});
    AppRenderInstance.dismissModal(); //trigger dismiss modal function
    expect(AppRender.state('modalIsOpen')).toBeFalsy(); //resultant state of modal

});

test('Coin item modal displays & dismiss successfully', () => {
    const AppRender = shallow(<App/>);
    const AppRenderInstance = AppRender.instance();
    expect(AppRender.state('modalIsOpen')).toBeFalsy(); //default state of modal
    AppRenderInstance.fetchCoinItem({});
    expect(AppRender.find('.modal').hasClass('open')).toBeTruthy(); //modal should have `open`  as part of the class name
    AppRenderInstance.dismissModal();
    expect(AppRender.find('.modal').hasClass('open')).toBeFalsy();//modal should not have `open`  as part of the class name
});
