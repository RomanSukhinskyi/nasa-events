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