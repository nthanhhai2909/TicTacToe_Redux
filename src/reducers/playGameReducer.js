import {INIT_BOARD,
     SET_VALUE_BOARD,
     CHANGE_TURN,
     PLAYER_WIN, 
     OPEN_DIALOG, 
     CLOSE_DIALOG,
     SET_PLAYER_WIN,
     SET_LIST_CHESS_OF_WIN,
     ADD_MOVE_HISTORY,
     ADD_NUMBER_MOVE,
     OPEN_DIALOG_EQUAL,
     CLOSE_DIALOG_EQUAL,
     OPEN_SORT_ACSCEDING, 
     CLOSE_SORT_ACSCEDING,
     GO_ON_BOARD_HISTORY,
     SET_TURN,
     BACK_HISTORY,
     TURN_OF_GO_ON_BOARD_HISTORY,
     NEW_GAME,
     NEW_HISTORY
    } from '../constants/actionTypes'
import { combineReducers } from 'redux'
import { initHistory } from '../actions/playgame';

const initialStatePlayGame = {
    listChessOfWin: null,
    playerWin: null,
    showDialogWin: false,
    isWin: false,
    isEqual: false,
    showDialogEqual: false,
    turn: 'x',
    isGoOnboard: false,
    indexHistory: null,
    board: new Array(0),
    
}
const initialStateHistory = {
    historys: [],
    listChess: [],
    sortByAscending: false,
    numberMove: 0,
}

const newBoard = numberCell => Array.apply(null, Array(numberCell)).map(() => new Array(numberCell).fill(null))

const playGame = (state = initialStatePlayGame, action) => {
    switch(action.type){
        case INIT_BOARD:
            return Object.assign({}, state,
                {board: newBoard(action.numberCell)});
        case NEW_GAME:
            return Object.assign({} , initialStatePlayGame);
        case SET_VALUE_BOARD:
            let mboard = JSON.parse(JSON.stringify(state.board));
            mboard[action.row][action.col] = state.turn;
            return Object.assign({}, state, {board: mboard});
        case CHANGE_TURN:
            let mTurn;
            if(state.turn === 'x') {
                mTurn = 'o';
            }
            if(state.turn === 'o'){
                mTurn='x';
            }
            return Object.assign({}, state, {turn: mTurn});
        case PLAYER_WIN:
            return Object.assign({}, state, {isWin:true})
        case OPEN_DIALOG:
            return Object.assign({}, state, {showDialog: true});
        case CLOSE_DIALOG:
            return Object.assign({}, state, {showDialog: false});
        case OPEN_DIALOG_EQUAL:
            return Object.assign({}, state, {showDialogEqual: true});
        case CLOSE_DIALOG_EQUAL:
            return Object.assign({}, state, {showDialogEqual: false});
        case SET_PLAYER_WIN:
            return Object.assign({}, state, {playerWin: action.player})
        case SET_LIST_CHESS_OF_WIN:
            let listChess = JSON.parse(JSON.stringify(state.listChessOfWin));
            return Object.assign({}, state, {listChessOfWin: action.arrayList})
        case GO_ON_BOARD_HISTORY: 
            let newboard = JSON.parse(JSON.stringify(action.board));
            return Object.assign({}, state, {board: newboard, 
                            isGoOnboard: true, indexHistory: action.indexHistory});
        case TURN_OF_GO_ON_BOARD_HISTORY:
            return Object.assign({}, state, {isGoOnboard: false});
        case SET_TURN: 
            return Object.assign({}, state, {turn: action.turn});
        default: 
            return state;
    }
}
const historys = (state = initialStateHistory, action) => {
    switch(action.type){
        case NEW_HISTORY:
            return Object.assign({}, initialStateHistory);
        case ADD_MOVE_HISTORY:
            return Object.assign({}, state, {historys: [...state.historys, action.board], 
                    listChess:[...state.listChess, {
                        row: action.row,
                        col: action.col
                    }] 
                });
        case ADD_NUMBER_MOVE:
            return Object.assign({}, state, {numberMove: state.numberMove + 1});
        case OPEN_SORT_ACSCEDING:
            return Object.assign({}, state, {sortByAscending: true});
        case CLOSE_SORT_ACSCEDING:
            return Object.assign({}, state, {sortByAscending: false});
        case BACK_HISTORY:
            return Object.assign({}, state, {
                historys: action.historys,
                listChess: action.listChess,
            });
        default: 
            return state;
    }
}

export default combineReducers({
    playGame,
    historys
  })

  export const getHistoryNow = state =>{
    let newState = JSON.parse(JSON.stringify(state));
    let result = newState.slice(newState.length - 1, newState.length);
    return result;
  }
   

