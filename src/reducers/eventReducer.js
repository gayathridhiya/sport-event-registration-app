import { combineReducers } from 'redux';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS, ADD_EVENT_TO_SELECTION_AREA , DELETE_EVENT_FROM_SELECTION } from '../constants/eventConstants';

const initEvents = {
    totalSelected:0,
    _events:[],
    _selectedEvents: [],
    uniqueCategories: []
}

function todoEvents(state = initEvents,action){
    switch(action.type){
        
        case GET_ALL_EVENTS: 
            const updatedEventList = action.payload.map( itm => ( {...itm, selectCount : 0}));
            const uniqueCategoriesList = [ ... new Set( updatedEventList.map ( o => o.event_category))]
            console.log(uniqueCategoriesList)
            return{
                ...state,
                _events:updatedEventList,
                uniqueCategories : uniqueCategoriesList
            }
        case GET_NUMBER_OF_SELECTED_EVENTS:
            return{
                ...state
            }
        case ADD_EVENT_TO_SELECTION_AREA:{
            return{
                ...state,
                _events : state._events.map(
                    (content, i) => content.id === action.payload.item.id ? { ...content, selectCount : content.selectCount+1} : content
                ),
                _selectedEvents :  [...state._selectedEvents, action.payload ],
                totalSelected: state.totalSelected+1
            }
        }
        case DELETE_EVENT_FROM_SELECTION:{
            const updatedSeletectedEventsList = state._selectedEvents.filter( itm => itm.item.id !== action.payload.item.item.id);
            const countToBeRemoved = updatedSeletectedEventsList.length
            return{
                ...state,
                _events : state._events.map(
                    (content, i) => content.id === action.payload.item.item.id ? { ...content, selectCount : 0} : content
                ),
                _selectedEvents : updatedSeletectedEventsList,
                totalSelected: countToBeRemoved
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