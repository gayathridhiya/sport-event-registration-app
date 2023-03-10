import callAPI from '../api/callAPI';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS, ADD_EVENT_TO_SELECTION_AREA, DELETE_EVENT_FROM_SELECTION, FILTER_EVENTS_BASED_ON_A_CATEGORY } from '../constants/eventConstants';


export const fetchEventRequest = () => {
    return async (dispatch) => {
        const res = await callAPI('', 'GET', null);
        dispatch(getAllEvents(res.data));
    }
}

/*GET_ALL_EVENTS*/
export function getAllEvents(payload){
    return{
        type: GET_ALL_EVENTS,
        payload
    }
}


/*GET_NUMBER_OF_SELECTED_EVENTS*/
export function getNoOfSelectedEvents(payload){
    return{
        type: GET_NUMBER_OF_SELECTED_EVENTS,
        payload
    }
}

// ADD_EVENT_TO_SELECTION_AREA
export function addEventToSelectionArea(payload){
    return{
        type: ADD_EVENT_TO_SELECTION_AREA,
        payload : payload
    }
}

//DELETE_EVENT_FROM_SELECTION
export function deleteEvenFromSelectionArea(payload){
    return {
        type: DELETE_EVENT_FROM_SELECTION,
        payload : payload
    }
}


//FILTER_EVENTS_BASED_ON_A_CATEGORY

export function filteredEventsBasedOnCategories(payload){
    return {
        type: FILTER_EVENTS_BASED_ON_A_CATEGORY,
        payload : payload
    }
}

