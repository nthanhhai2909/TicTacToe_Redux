import * as types from '../constants/actionTypes'

export const initBoard = numberCell => ({
    type: types.INIT_BOARD,
    numberCell
})

export const setBoard = numberCell => (dispatch) => {
    dispatch(initBoard(numberCell));
}

export const setValueBoard = (row, col) => ({
    type: types.SET_VALUE_BOARD,
    row,
    col, 
})
export const changeTurn = () => ({
    type:types.CHANGE_TURN
})

export const changeBoard = (row, col) => (dispatch) =>{
    dispatch(setValueBoard(row, col));
    dispatch(changeTurn());
}
    
    

