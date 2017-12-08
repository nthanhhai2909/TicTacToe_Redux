import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import playgameReducer from   './playGameReducer'

export default combineReducers({
    homeReducer,
    playgameReducer
})
