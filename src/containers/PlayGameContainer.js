import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import PlayGame from '../components/PlayGame'
import {setBoard, changeBoard} from '../actions/playgame'

class PlayGameContainer extends React.Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.setBoard(parseInt(this.props.numberCell));
    }
    handleClick(row, col){
        if(this.props.board[row][col] !== null){
            return;
        }

        this.props.changeBoard(row, col);
    }
    isWin(board, rowCheck, colCheck){
        if(board === null){
            return null;
        }
        if(rowCheck === null || colCheck === null){
            return null;
        }

        if(rowCheck > board.length || colCheck > board.length || rowCheck < 0 || colCheck < 0){
            return null;
        }
        var turn = board[rowCheck][colCheck];

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
    }
    render(){
        return(
            <PlayGame
                turn={this.props.turn}
                board={this.props.board}
                clickBox={(row, col) => this.handleClick(row, col)}
             />
            
        )
    }
    
}

const mapStateToProps = state =>({
    turn: state.playgameReducer.playGame.turn,
    numberCell: state.homeReducer.numberCell,
    board: state.playgameReducer.playGame.board
})
    


PlayGameContainer.propTypes = {
    turn: PropTypes.string.isRequired,
    numberCell: PropTypes.string.isRequired,
    board: PropTypes.array,
    setBoard: PropTypes.func,
    changeBoard: PropTypes.func
}
export default connect(
    mapStateToProps,
    { setBoard, changeBoard }
) (PlayGameContainer)