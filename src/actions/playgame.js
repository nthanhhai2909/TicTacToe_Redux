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
export const playerWin = () =>({
    type:types.PLAYER_WIN
})

export const setWinGame = () => (dispatch) => 
    dispatch(playerWin());

export const changeBoard = (row, col) => (dispatch) =>{
    dispatch(setValueBoard(row, col));
    dispatch(changeTurn());
}

export const openDialog = () => ({
    type: types.OPEN_DIALOG
})

export const closeDialog = () => ({
    type: types.CLOSE_DIALOG
})

export const openDialogEqual = () =>({
    type:types.OPEN_DIALOG_EQUAL
})
export const closeDialogEqual = () =>({
    type:types.CLOSE_DIALOG_EQUAL
})

export const toogleDialogEqual = (status) => (dispatch) => {
    status ? dispatch(openDialogEqual()): dispatch(closeDialogEqual());
}

export const toogleDialog = (status) => (dispatch) => {
    status ? dispatch(openDialog()): dispatch(closeDialog());
}

export const PlayerWin = (player) => ({
    type: types.SET_PLAYER_WIN,
    player
})

export const setListChessOfWin = (arrayList) => ({
    type:types.SET_LIST_CHESS_OF_WIN, 
    arrayList
})
export const setPlayerWin = (player, arrayList) => (dispatch) => {
    dispatch(PlayerWin(player));
    dispatch(setListChessOfWin(arrayList));
}

export const addMoveHistory = (row, col, turn) =>({
    type: types.ADD_MOVE_HISTORY,
    row,
    col,
    turn
})
export const addNumberMove = () =>({
    type: types.ADD_NUMBER_MOVE
})
    

export const changeHistory =  (row, col, turn) => (dispatch) =>{
    dispatch(addMoveHistory(row, col, turn));
    dispatch(addNumberMove());
}





    
    

