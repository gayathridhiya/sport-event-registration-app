import callAPI from '../api/callAPI';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS, ADD_EVENT_TO_SELECTION_AREA} from '../constants/eventConstants';


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

