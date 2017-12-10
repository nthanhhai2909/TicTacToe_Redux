import * as types from '../constants/actionTypes'

export const setNumberCell = numberCell => ({
    type:types.SET_NUMBER_CELL,
    numberCell
})

export const setNumberCellIsValid = () => ({
    type:types.SET_MESSAGE_NUMBER_CELL_INVALID
})

export const setNumberCellValid = () => ({
    type:types.SET_MESSAGE_NUMBER_CELL_VALID
})

const isValid = numberCell => {
    
    if(numberCell < 5) {return false;}
    if(numberCell > 20) {return false;}
    return true;
}

export const changeNumberCell = numberCell => (dispatch) =>{
    if(!isValid(numberCell)){dispatch(setNumberCellIsValid())}
    else{
        dispatch(setNumberCellValid());
        dispatch(setNumberCell(numberCell));
    }
}
