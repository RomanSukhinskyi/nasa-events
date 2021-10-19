import {actionTypes} from './actionTypes.js'

export const searchNaturalEvents = payload => ({type: actionTypes.SEARCH_EVENTS})
export const searchNaturalEventsSuccess = payload => ({type: actionTypes.SEARCH_EVENTS_SUCCESS, payload})
export const searchNaturalEventsFail = payload => ({type: actionTypes.SEARCH_EVENTS_FAIL, payload})