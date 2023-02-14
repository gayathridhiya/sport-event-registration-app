import { createStore, applyMiddleware } from 'redux';
import SportsEventApp from './eventReducer';
import configureMockStore from 'redux-mock-store';
import { GET_ALL_EVENTS, ADD_EVENT_TO_SELECTION_AREA, DELETE_EVENT_FROM_SELECTION , FILTER_EVENTS_BASED_ON_A_CATEGORY } from '../constants/eventConstants'
import thunk from 'redux-thunk';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('Event Reducer', () => {
    let initialState;
    beforeEach(() => {
        store.clearActions();
        initialState = {
            totalSelected: 0,
            _events: [],
            _selectedEvents: [],
            uniqueCategories: [],
            filteredEventsBasedOnCategory: [],
            filterCategory: 'All Events'
        };
    });

    test('should return initial state', () => {
        let store = createStore(SportsEventApp)
        let initEvents = { _events: [], _selectedEvents: [], filterCategory: "All Events", filteredEventsBasedOnCategory: [], totalSelected: 0, uniqueCategories: [] };
        expect(store.getState()._todoEvents).toEqual(initEvents);
    })

    test('should handle GET_ALL_EVENTS', () => {
        const action = {
            type: GET_ALL_EVENTS,
            payload: [{ id: 1, event_category: 'Athelete' }, { id: 2, event_category: 'Swimming' }]
        };
        const expectedState = {
            totalSelected: 0,
            _events: [{ id: 1, event_category: 'Athelete', selectCount: 0 }, { id: 2, event_category: 'Swimming', selectCount: 0 }],
            _selectedEvents: [],
            uniqueCategories: ['Athelete', 'Swimming', 'All Events'],
            filteredEventsBasedOnCategory: [{ id: 1, event_category: 'Athelete', selectCount: 0 }, { id: 2, event_category: 'Swimming', selectCount: 0 }],
            filterCategory: 'All Events'
        };

        const reducer = SportsEventApp(initialState, action);
        expect(reducer._todoEvents).toBeTruthy();
    });


    test('should return correct values for action GET_ALL_EVENTS', () => {
        const action = {
            type: GET_ALL_EVENTS,
            payload: [{ id: 1, event_category: 'Athelete' }, { id: 2, event_category: 'Swimming' }]
        };
        const expectedState = {
            totalSelected: 0,
            _events: [{ id: 1, event_category: 'Athelete', selectCount: 0 }, { id: 2, event_category: 'Swimming', selectCount: 0 }],
            _selectedEvents: [],
            uniqueCategories: ['Athelete', 'Swimming', 'All Events'],
            filteredEventsBasedOnCategory: [{ id: 1, event_category: 'Athelete', selectCount: 0 }, { id: 2, event_category: 'Swimming', selectCount: 0 }],
            filterCategory: 'All Events'
        };

        const reducer = SportsEventApp(initialState, action);
        expect(reducer._todoEvents).toEqual(expectedState);
    });


    test('should handle ADD_EVENT_TO_SELECTION_AREA action', () => {
        const state = {
            totalSelected: 0,
            _events: [
                { id: 1, name: 'Athelete', selectCount: 0 },
                { id: 2, name: 'Swimming', selectCount: 0 }
            ],
            _selectedEvents: [],
            uniqueCategories: [],
            filteredEventsBasedOnCategory: [],
            filterCategory: 'All Events'
        };
        const action = {
            type: ADD_EVENT_TO_SELECTION_AREA,
            payload: { item: { id: 1, name: 'Athelete' } }
        };

        const reducer = SportsEventApp(state, action);

        console.log(reducer._todoEvents.totalSelected)
        expect(reducer._todoEvents.totalSelected).toBeTruthy();
        expect(reducer._todoEvents.totalSelected).toBe(1);

        expect(reducer._todoEvents._selectedEvents.length).toBe(1);

    });

    test('should handle DELETE_EVENT_FROM_SELECTION action', () => {
        // const event = { id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 1 };
        const initialStateForDelete = {
            totalSelected: 1,
            _events: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 0 },
            { id: 2, name: 'Butterfly 200', event_category: 'Boxing', selectCount: 0 },
            { id: 5, event_name: 'Triple Jump', event_category: 'Athletics', selectCount: 1 }],
            _selectedEvents: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 0 }],
            uniqueCategories: ['Boxing', 'All Events'],
            filteredEventsBasedOnCategory: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 1 },
            { id: 2, name: 'Butterfly 200', event_category: 'Boxing', selectCount: 0 },
            { id: 5, event_name: 'Triple Jump', event_category: 'Athletics', selectCount: 1 }],
            filterCategory: 'All Events'
        };
        const action = {
            type: DELETE_EVENT_FROM_SELECTION,
            payload: { item: { id: 5, event_name: 'Triple Jump', event_category: 'Athletics', selectCount: 1 } }
        };
        const expectedState = {
            totalSelected: 0,
            _events: { id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 1 },
            _selectedEvents: [],
            uniqueCategories: ['Boxing', 'All Events'],
            filteredEventsBasedOnCategory: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 1 }],
            filterCategory: 'All Events'
        };

        const reducer = SportsEventApp(initialStateForDelete, action);

        console.log(reducer._todoEvents._selectedEvents.length)

        expect(reducer._todoEvents._selectedEvents.length).toEqual(0);

    });

    test('handles FILTER_EVENTS_BASED_ON_A_CATEGORY', () => {
        
        const initialStateForFiltering = {
            totalSelected: 1,
            _events: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 0 },
            { id: 2, name: 'Butterfly 200', event_category: 'Boxing', selectCount: 0 },
            { id: 5, event_name: 'Triple Jump', event_category: 'Athletics', selectCount: 1 }],
            _selectedEvents: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 0 }],
            uniqueCategories: ['Boxing', 'Athletics', 'All Events'],
            filteredEventsBasedOnCategory: [{ id: 1, name: 'Butterfly 100', event_category: 'Boxing', selectCount: 1 },
            { id: 2, name: 'Butterfly 200', event_category: 'Boxing', selectCount: 0 },
            { id: 5, event_name: 'Triple Jump', event_category: 'Athletics', selectCount: 1 }],
            filterCategory: 'All Events'
        };
        

        const action = {
            type: FILTER_EVENTS_BASED_ON_A_CATEGORY,
            payload: 'Athletics' 
        };

        const reducer = SportsEventApp(initialStateForFiltering, action);
        expect(reducer._todoEvents.filterCategory).toEqual('Athletics');
        
      });






});