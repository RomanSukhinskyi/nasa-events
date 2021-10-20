import API from '../api/utils.js'
import {searchNaturalEvents, searchNaturalEventsSuccess, searchNaturalEventsFail} from './action-creators.js'

export const fetchNaturalEvents = () => {
    return async dispatch => {
       dispatch(searchNaturalEvents())
       try {
        const {data: {events}} = await API.get('/', {
        params: {
            limit: 30,
            status: 'all',
        }
    })
    
    dispatch(searchNaturalEventsSuccess(events))
       } catch (error) {
           dispatch(searchNaturalEventsFail(error))
       }
    }
}

export const fetchNaturalEventsByStatus = (query) => {
    return async dispatch => {
       dispatch(searchNaturalEvents())
       try {
        const {data: {events}} = await API.get('/', {
        params: {
            limit: 30,
            status: query,
        }
    })
    
    dispatch(searchNaturalEventsSuccess(events))
       } catch (error) {
           dispatch(searchNaturalEventsFail(error))
       }
    }
}

export const fetchNaturalEventsByCategory = (query) => {
    return async dispatch => {
       dispatch(searchNaturalEvents())
       try {
        const {data: {events}} = await API.get('/', {
        params: {
            limit: 30,
            category: query,
        }
    })
    
    dispatch(searchNaturalEventsSuccess(events))
       } catch (error) {
           dispatch(searchNaturalEventsFail(error))
       }
    }
}