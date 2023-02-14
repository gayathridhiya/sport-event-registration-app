import * as actions from './eventAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

import axios from 'axios';
import { FILTER_EVENTS_BASED_ON_A_CATEGORY, GET_ALL_EVENTS, DELETE_EVENT_FROM_SELECTION, ADD_EVENT_TO_SELECTION_AREA , GET_NUMBER_OF_SELECTED_EVENTS} from '../constants/eventConstants';
jest.mock('axios');

describe('UserActions', () => {
    beforeEach(() => {
        store.clearActions();
    });

  
    test('should dipatch all events', () => {
        const expectedAction = {
            type: GET_ALL_EVENTS
        }
        expect(actions.getAllEvents()).toEqual(expectedAction);
    });

  
    test('should receive payload category', () => {
        const expectedAction = {
            type: FILTER_EVENTS_BASED_ON_A_CATEGORY,
            payload: 'Athlete'
        }
        expect(actions.filteredEventsBasedOnCategories('Athlete')).toEqual(expectedAction);
    });


    test('should delete only particular item', () => {
        const expectedAction = {
            type: DELETE_EVENT_FROM_SELECTION,
            payload: 'itemid1'
        }
        expect(actions.deleteEvenFromSelectionArea('itemid1')).toEqual(expectedAction);
    });

    test('should add only selected item', () => {
        const expectedAction = {
            type: ADD_EVENT_TO_SELECTION_AREA,
            payload: 'itemid1'
        }
        expect(actions.addEventToSelectionArea('itemid1')).toEqual(expectedAction);
    });

    test('should return number of components', () => {
        const expectedAction = {
            type: GET_NUMBER_OF_SELECTED_EVENTS
        }
        expect(actions.getNoOfSelectedEvents()).toEqual(expectedAction);
    })


   
})