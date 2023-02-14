// import React from 'react';
// import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import FilterEvent from './FilterEvent';
// import { filteredEventsBasedOnCategories } from '../../actions/eventAction';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';
// import Jasmine from 'jasmine';

// Enzyme.configure({adapter : new Adapter()})


// describe('FilterEvent component', () => {
//     let wrapper, props, mockDispatch;
  
//     beforeEach(() => {
//       mockDispatch = Jasmine.createSpy('dispatch');
//       props = {
//         filteredCategories: ['Soccer', 'Basketball'],
//         filterCategory: 'Soccer',
//         filteredEventsBasedOnCategories: mockDispatch
//       };
//       wrapper = mount(
//         <FilterEvent {...props} />
//       );
//     });
  
//     it('should render the component', () => {
//       expect(wrapper.exists()).toBe(true);
//     });
  
//     it('should render the section title', () => {
//       expect(wrapper.find('.selectedTitle').text()).toEqual('Choose your Play Ground!');
//     });
  
//     it('should render the categories', () => {
//       const categoryButtons = wrapper.find('.btn');
//       expect(categoryButtons.length).toEqual(2);
//       expect(categoryButtons.at(0).text()).toEqual('Soccer');
//       expect(categoryButtons.at(0).hasClass('active')).toBe(true);
//       expect(categoryButtons.at(1).text()).toEqual('Basketball');
//       expect(categoryButtons.at(1).hasClass('active')).toBe(false);
//     });
  
// });