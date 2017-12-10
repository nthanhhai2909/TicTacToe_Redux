import {SET_NUMBER_CELL,
        SET_MESSAGE_NUMBER_CELL_INVALID,
        SET_MESSAGE_NUMBER_CELL_VALID,
        } from '../constants/actionTypes' 

const initialState = {
    message:'',
    numberCell: 0,
    
}
const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NUMBER_CELL:
            return Object.assign({}, state, {numberCell: parseInt(action.numberCell)});
        case SET_MESSAGE_NUMBER_CELL_INVALID:
            return Object.assign({}, state, {message: SET_MESSAGE_NUMBER_CELL_INVALID});
        case SET_MESSAGE_NUMBER_CELL_VALID:
            return Object.assign({}, state, {message: ''}); 

        default:
            return state;
    }
}

export default homeReducer