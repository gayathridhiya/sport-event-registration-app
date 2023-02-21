// import React from 'react';
// import { shallow } from 'enzyme';
// import SelectedEvents from './SelectedEvents';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';
// import { cleanup } from "@testing-library/react";

// Enzyme.configure({adapter : new Adapter()})
// afterEach(cleanup);
// describe('SelectedEvents Component', () => {
//   const selectedEvents = [
//     { id: 1, name: 'Event 1' },
//     { id: 2, name: 'Event 2' },
//   ];

//   it('should render SelectedEvents component', () => {
//     const wrapper = shallow(<SelectedEvents selectedEvents={selectedEvents} />);
//     expect(wrapper.find('.selected-events')).toHaveLength(1);
//   });

//   it('should display the correct number of selected events', () => {
//     const wrapper = shallow(<SelectedEvents selectedEvents={selectedEvents} />);
//     expect(wrapper.find('.selected-events__count')).toHaveLength(1);
//     expect(wrapper.find('.selected-events__count').text()).toEqual(`Selected Events (${selectedEvents.length})`);
//   });

//   it('should render each selected event name', () => {
//     const wrapper = shallow(<SelectedEvents selectedEvents={selectedEvents} />);
//     expect(wrapper.find('.selected-events__list-item')).toHaveLength(selectedEvents.length);
//     selectedEvents.forEach((event, index) => {
//       expect(wrapper.find('.selected-events__list-item').at(index).text()).toEqual(event.name);
//     });
//   });
// });
