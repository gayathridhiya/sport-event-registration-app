import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EventHome from './EventHome';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { cleanup } from "@testing-library/react";

const mockStore = configureStore([]);
Enzyme.configure({adapter : new Adapter()})
afterEach(cleanup);
describe('EventHome component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      _todoEvents: {
        totalSelected: 0,
        _events: [],
        uniqueCategories: [],
        filteredEventsBasedOnCategory: [],
        filterCategory: '',
      },
    });

    component = shallow(
      <Provider store={store}>
        <EventHome />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component.exists()).toBe(true);
  });
});
