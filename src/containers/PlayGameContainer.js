import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import PlayGame from '../components/PlayGame'
import {setBoard, changeBoard, setWinGame,
     toogleDialog,toogleDialogEqual, setPlayerWin, changeHistory} from '../actions/playgame'


class PlayGameContainer extends React.Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.setBoard(parseInt(this.props.numberCell));
    }
    handleClick(row, col){
        if(this.props.isWin){
            return;
        }

        if(this.props.board[row][col] !== null){
            return;
        }

        if(this.isEqual(parseInt(this.props.numberCell), this.props.numberMove)){
            this.props.toogleDialogEqual(true)
            this.props.setWinGame();
        }
        let arrWin = this.isWin(this.props.board, row, col, this.props.turn);
        // check win
        if(arrWin !== null){
            this.props.setWinGame();    
            this.props.toogleDialog(true); 
            this.props.setPlayerWin(this.props.turn, arrWin);
        }

        this.props.changeBoard(row, col);
        //add move in history
        this.props.changeHistory(row, col, this.props.turn);
        
    }
    isEqual(numberCell, numberMove){
        if(numberMove === (numberCell * numberCell - 1 )){
            return true
        }
        return false;
    }
    isWin(board, rowCheck, colCheck, turn){

        let index = colCheck;
        let arrBoxWin = [];
        arrBoxWin.push[rowCheck, colCheck];

        while(index > 0){
            index--;
            if(board[rowCheck][index] === turn){
                arrBoxWin.push([rowCheck, index]);
            }
            else{
                break;
            }

        }
        index = colCheck;
        while(index < board.length -1){
            index++;
            if(board[rowCheck][index] === turn){
                arrBoxWin.push([rowCheck, index]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            index = rowCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }
        //-------------------------------------------------------------
        while(index > 0){
            index--;
            if(board[index][colCheck] === turn){
                arrBoxWin.push([index, colCheck]);
            }
            else{
                break;
                
            }
        }
        index = rowCheck;
        while(index < board.length - 1){
            index++;
            if(board[index][colCheck] === turn){
                arrBoxWin.push([index, colCheck]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >=5){
            return arrBoxWin;
        }
        else{
            index = rowCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }

        //------------------------------------------------------------------

        let rowIndex = rowCheck;
        let colIndex = colCheck;

        while(rowIndex >0 && colIndex >0){
            rowIndex--;
            colIndex--;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }
        rowCheck = rowCheck;
        colIndex = colCheck;
        while(rowIndex < board.length - 1 && colIndex < board.length - 1){
            rowIndex++;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }

        //--------------------------------------------------------------

        while(rowIndex > 0 && colCheck < board.length - 1){
            rowIndex--;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                
                break;
            }
        }
        rowIndex = rowCheck;
        colIndex = colCheck;
        while(rowIndex < board.length - 1 && colIndex > 0){
            rowIndex++;
            colIndex--;
            if(rowIndex === board.length){
                return null;
            }
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }
        
        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            arrBoxWin = [];
        }

        return null;
    }
    render(){
        return(
            <PlayGame
                listChessOfWin={this.props.listChessOfWin}
                playerWin={this.props.playerWin}
                submitWin={() => this.props.toogleDialog(false)}
                showDialog={this.props.showDialogWin}
                showDialogEqual={this.props.showDialogEqual}
                isWin={this.props.isWin}
                turn={this.props.turn}
                board={this.props.board}
                clickBox={(row, col) => this.handleClick(row, col)}
                historys={this.props.historys}
                submitEqual={() => this.props.toogleDialogEqual(false)}
             />
            
        )
    }
    
}

const mapStateToProps = state =>({
    showDialogWin: state.playgameReducer.playGame.showDialog,
    isWin: state.playgameReducer.playGame.isWin,
    turn: state.playgameReducer.playGame.turn,
    numberCell: state.homeReducer.numberCell,
    board: state.playgameReducer.playGame.board,
    playerWin: state.playgameReducer.playGame.playerWin,
    listChessOfWin: state.playgameReducer.playGame.listChessOfWin,
    historys: state.playgameReducer.historys.historys,
    numberMove: state.playgameReducer.historys.numberMove,
    isEqual: state.playgameReducer.playGame.isEqual,
    showDialogEqual: state.playgameReducer.playGame.showDialogEqual

})
    


PlayGameContainer.propTypes = {
    isWin: PropTypes.bool.isRequired,
    turn: PropTypes.string.isRequired,
    numberCell: PropTypes.string.isRequired,
    board: PropTypes.array,
    setBoard: PropTypes.func,
    changeBoard: PropTypes.func,
    setWinGame:PropTypes.func,
    toogleDialog: PropTypes.func,
    setPlayerWin: PropTypes.func, 
    changeHistory: PropTypes.func,
    history: PropTypes.array,
    numberMove: PropTypes.number,
    isEqual: PropTypes.bool,
    showDialogEqual: PropTypes.bool,
    toogleDialogEqual: PropTypes.func
    
}
export default connect(
    mapStateToProps,
    { setBoard, changeBoard, setWinGame, 
        toogleDialog, setPlayerWin, 
        changeHistory,
        toogleDialogEqual}
) (PlayGameContainer)