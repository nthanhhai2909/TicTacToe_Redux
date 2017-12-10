import * as types from '../constants/actionTypes'

export const initBoard = numberCell => ({
    type: types.INIT_BOARD,
    numberCell
})

export const newGame = () => ({
    type: types.NEW_GAME,
})

export const newHistory = () => ({
    type: types.NEW_HISTORY
})

export const newGameClick = () => (dispatch) => {
    dispatch(newHistory());
    dispatch(newGame());
}
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

export const backHistory = (historys, listChess) =>({
    type: types.BACK_HISTORY,
    historys,
    listChess
})
export const changeBoard = (row, col) => (dispatch, getState) =>{

    if(getState().playgameReducer.playGame.isGoOnboard === true){
       

            let mHistorys = JSON.parse(JSON.stringify(getState().playgameReducer.historys.historys));
            let mListChess = JSON.parse(JSON.stringify(getState().playgameReducer.historys.listChess))
            mHistorys = mHistorys.slice(0, getState().playgameReducer.playGame.indexHistory + 1);
            mListChess = mListChess.slice(0, getState().playgameReducer.playGame.indexHistory + 1);
            dispatch(backHistory(mHistorys, mListChess));
            dispatch(turnOfGoOnBoardHistory());
    }

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

export const addMoveHistory = (board, row, col) =>({
    type: types.ADD_MOVE_HISTORY,
    board,
    row,
    col,
})

export const initHistory = (board, row, col) => (dispatch) => {
    dispatch(addMoveHistory(board, row, col));
}
export const addNumberMove = () =>({
    type: types.ADD_NUMBER_MOVE
})
    

export const changeHistory =  (row, col) => (dispatch, getState) =>{
    
    dispatch(addMoveHistory(getState().playgameReducer.playGame.board,
        row, col));
    dispatch(addNumberMove());
}


export const openSortAscending = () =>({
    type: types.OPEN_SORT_ACSCEDING
})

export const closeSortAscending = () => ({
    type: types.CLOSE_SORT_ACSCEDING
})

export const toogleSortAscending = () => (dispatch, getState) => {
    if(getState().playgameReducer.historys.sortByAscending === false){
        dispatch(openSortAscending());
    }
    else{
        dispatch(closeSortAscending());
    } 
}

export const goOnBoardHistory = (board,indexHistory) => ({
    type: types.GO_ON_BOARD_HISTORY,
    board,
    indexHistory
})

export const turnOfGoOnBoardHistory = () => ({
    type: types.TURN_OF_GO_ON_BOARD_HISTORY
})
export const setTurn = (turn) => ({
    type: types.SET_TURN,
    turn
})

export const getHistoryandSetBoard = (row, col) => (dispatch, getState) => {
    if(getState().playgameReducer.playGame.isWin){
        return;
    }
    let index = -1;

    for(let i = 0; i < getState().playgameReducer.historys.listChess.length; i++){
        if(row ===  getState().playgameReducer.historys.listChess[i].row && 
            col ===  getState().playgameReducer.historys.listChess[i].col){
                index =  i;
            }
    }


    let board = JSON.parse(JSON.stringify(getState().playgameReducer.historys.historys[index]));
    let mturn;

    if(row !== -1){
        if(board[row][col] === 'x'){
            mturn = 'o';
        }
        if(board[row][col] === 'o'){
            mturn = 'x';
        }
    }
    else{
        mturn = 'x';
    }    
    dispatch(goOnBoardHistory(board, index));
    dispatch(setTurn(mturn));
}



    
    

