import {actionTypes} from './actionTypes.js'
const INITIAL_STATE = {
    loading: false,
    data: [],
    error: null
}

const naturalEventsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_EVENTS: 
            return {
                loading: true,
                data: [],
                error: null
            }
        case actionTypes.SEARCH_EVENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case actionTypes.SEARCH_EVENTS_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default naturalEventsReducer;