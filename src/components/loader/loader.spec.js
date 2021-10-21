import { shallow } from "enzyme";
import React from "react";
import Loader from "./loader";

const setUp = (props) => shallow(<Loader {...props}/>);

describe('Shoud render Loader component', () => {
    let component = setUp();

    beforeEach(() => {
        component
    })

    it('Should contain .loader', () => {
    const wrapper = component.find('.loader');
    expect(wrapper.length).toBe(1)
})

it('Should contain svg el', () => {
    const wrapper = component.find('svg');
    expect(wrapper.length).toBe(1)
})
})

