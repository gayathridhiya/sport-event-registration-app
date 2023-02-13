import React from "react";
import EventHome from "./EventHome";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount} from 'enzyme';
import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";

Enzyme.configure({adapter : new Adapter()})
afterEach(cleanup);

describe('Events Home', () => {
    let wrapper;
    beforeEach( () => { wrapper = shallow(<Provider ><EventHome/></Provider>) } );

    it("renders the events section", () => {
        expect(wrapper.find('#events')).toHaveLength(1);
    });
});