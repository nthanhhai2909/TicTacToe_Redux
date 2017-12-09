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
     CLOSE_SORT_ACSCEDING
    } from '../constants/actionTypes'
import { combineReducers } from 'redux'

const initialStatePlayGame = {
    listChessOfWin: null,
    playerWin: null,
    showDialogWin: false,
    isWin: false,
    isEqual: false,
    showDialogEqual: false,
    turn: 'x',
    board: new Array(0),
    
}
const initialStateHistory = {
    historys: [{row: -1, col: -1, turn: 'none'}],
    sortByAscending: false,
    numberMove: 0,
}

const newBoard = numberCell => Array.apply(null, Array(numberCell)).map(() => new Array(numberCell).fill(null))

const playGame = (state = initialStatePlayGame, action) => {
    switch(action.type){
        case INIT_BOARD:
            return Object.assign({}, state,
                {board: newBoard(action.numberCell)});
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
        
        default: 
            return state;
    }
}
const historys = (state = initialStateHistory, action) => {
    switch(action.type){
        case ADD_MOVE_HISTORY:
            return Object.assign({}, state,
                 {historys: [...state.historys,
                        {
                            row: action.row,
                            col: action.col,
                            turn: action.turn,
                        }
                    ]
                })
        case ADD_NUMBER_MOVE:
            return Object.assign({}, state, {numberMove: state.numberMove + 1});
        case OPEN_SORT_ACSCEDING:
            return Object.assign({}, state, {sortByAscending: true});
        case CLOSE_SORT_ACSCEDING:
            return Object.assign({}, state, {sortByAscending: false});
        default: 
            return state;
    }
}

export default combineReducers({
    playGame,
    historys
  })


