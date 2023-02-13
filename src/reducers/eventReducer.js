import { combineReducers } from 'redux';
// import { filteredEventsBasedOnCategory } from '../actions/eventAction';
import { GET_ALL_EVENTS , GET_NUMBER_OF_SELECTED_EVENTS, ADD_EVENT_TO_SELECTION_AREA , DELETE_EVENT_FROM_SELECTION, FILTER_EVENTS_BASED_ON_A_CATEGORY } from '../constants/eventConstants';

const initEvents = {
    totalSelected:0,
    _events:[],
    _selectedEvents: [],
    uniqueCategories: [],
    filteredEventsBasedOnCategory:[],
    filterCategory : 'All Events'
}

function todoEvents(state = initEvents,action){
    switch(action.type){
        
        case GET_ALL_EVENTS: 
            const updatedEventList = action.payload.map( itm => ( {...itm, selectCount : 0}));
            const uniqueCategoriesList = [ ... new Set( updatedEventList.map ( o => o.event_category)), 'All Events']
            console.log(uniqueCategoriesList)
            return{
                ...state,
                _events:updatedEventList,
                filteredEventsBasedOnCategory:updatedEventList,
                uniqueCategories : uniqueCategoriesList
            }
        case GET_NUMBER_OF_SELECTED_EVENTS:
            return{
                ...state
            }
        case ADD_EVENT_TO_SELECTION_AREA:{
            const item = {...action.payload.item, selectCount:1}
            
            return{
                ...state,
                _events : state._events.map(
                    (content, i) => content.id === action.payload.item.id ? { ...content, selectCount : 1} : content
                ),
                filteredEventsBasedOnCategory: state.filteredEventsBasedOnCategory.map(
                    (content, i) => content.id === action.payload.item.id ? { ...content, selectCount : 1} : content
                ),
                _selectedEvents :  [...state._selectedEvents, item ],
                totalSelected: state.totalSelected+1
            }
        }
        case DELETE_EVENT_FROM_SELECTION:{
            const updatedSeletectedEventsList = state._selectedEvents.filter( itm => itm.id !== action.payload.item.id);
            const countToBeRemoved = updatedSeletectedEventsList.length
            return{
                ...state,
                _events : state._events.map(
                    (content, i) => content.id === action.payload.item.id ? { ...content, selectCount : 0} : content
                ),
                filteredEventsBasedOnCategory: state.filteredEventsBasedOnCategory.map(
                    (content, i) => content.id === action.payload.item.id ? { ...content, selectCount : 0} : content
                ),
                _selectedEvents : updatedSeletectedEventsList,
                totalSelected: countToBeRemoved
            }
        }
        case FILTER_EVENTS_BASED_ON_A_CATEGORY:{
            let filteredEventsToBeDisplayed;
            if (action.payload === "All Events") {
                filteredEventsToBeDisplayed = state._events;
            }
            else{
            filteredEventsToBeDisplayed = state._events.filter( itm => itm.event_category === action.payload);
            }
            console.log("filter reducer",filteredEventsToBeDisplayed)
            return {
                ...state,
                filterCategory : action.payload,
                filteredEventsBasedOnCategory : filteredEventsToBeDisplayed
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