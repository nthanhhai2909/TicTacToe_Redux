import {INIT_BOARD,
     SET_VALUE_BOARD,
     CHANGE_TURN,
     PLAYER_WIN, 
     OPEN_DIALOG, 
     CLOSE_DIALOG,
     SET_PLAYER_WIN,
     SET_LIST_CHESS_OF_WIN,
    } from '../constants/actionTypes'
import { combineReducers } from 'redux'

const initialState = {
    listChessOfWin: null,
    playerWin: null,
    showDialog: false,
    isWin: false,
    turn: 'x',
    board: new Array(0),
}

const newBoard = numberCell => Array.apply(null, Array(numberCell)).map(() => new Array(numberCell).fill(null))

const playGame = (state = initialState, action) => {
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
        case SET_PLAYER_WIN:
            return Object.assign({}, state, {playerWin: action.player})
        case SET_LIST_CHESS_OF_WIN:
            let listChess = JSON.parse(JSON.stringify(state.listChessOfWin));
            
            return Object.assign({}, state, {listChessOfWin: action.arrayList})
        default: 
            return state;
    }
}
const history = (state = {}, action) => {
    switch(action.type){
        case 'hihi':
            return state;
        default: 
            return state;
    }
}
export default combineReducers({
    playGame,
    history
  })


