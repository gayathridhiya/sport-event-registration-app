import { combineReducers } from 'redux';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS, ADD_EVENT_TO_SELECTION_AREA , DELETE_EVENT_FROM_SELECTION} from '../constants/eventConstants';

const initEvents = {
    numberCart:0,
    _events:[],
    _selectedEvents: [],
}

function todoEvents(state = initEvents,action){
    switch(action.type){
        case GET_ALL_EVENTS: 
            return{
                ...state,
                _events:action.payload
            }
        case GET_NUMBER_OF_SELECTED_EVENTS:
            return{
                ...state
            }
        case ADD_EVENT_TO_SELECTION_AREA:{
           
            return{
                ...state,
                _selectedEvents :  [...state._selectedEvents, action.payload],
                numberCart: state.numberCart+1
            }
        }
        case DELETE_EVENT_FROM_SELECTION:{
            const updatedSeletectedEventsList = state._selectedEvents.filter( itm => itm.id !== action.payload.id);
            const countToBeRemoved = updatedSeletectedEventsList.length
            return{
                ...state,
                _selectedEvents : updatedSeletectedEventsList,
                numberCart: countToBeRemoved
            }
        }
        default:
            return state;
    }
}
const SportsEventApp = combineReducers({
    _todoEvents:todoEvents
});
export default SportsEventApp;