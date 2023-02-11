import { combineReducers } from 'redux';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS} from '../constants/eventConstants';

const initEvents = {
    numberCart:0,
    Carts:[],
    _events:[]
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
        default:
            return state;
    }
}
const SportsEventApp = combineReducers({
    _todoEvents:todoEvents
});
export default SportsEventApp;