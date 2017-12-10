import React from 'react'
import PropTypes from 'prop-types';
import '../css/index.css'
import {Button} from 'react-bootstrap'
import {changeBoard} from '../actions/playgame'

const Square = ({value, clickBox, listChessOfWin, row, col}) => {
    const style = {
        backgroundColor: 'red'
    }

    let boxOfWin = false;
    if(listChessOfWin){
        for(let i = 0; i < listChessOfWin.length; i++){
            if(listChessOfWin[i][0] === row && listChessOfWin[i][1] === col){
                boxOfWin = true;
                break;
            }
        }
    }
    
    if(boxOfWin){
        return(
            value === 'x' ?
            <Button 
                className='my-btn-x'
                style={{backgroundColor:'red'}}
                onClick={() => clickBox()}>
            {value}
            </Button>
            :<Button 
                className='my-btn-o'
                style={{backgroundColor:'red'}}
                onClick={() => clickBox()}>
            {value}
            </Button>
        )
    }
    else{
        return(
            value === 'x' ?
            <Button 
                className='my-btn-x'
                onClick={() => clickBox()}>
            {value}
            </Button>
            :<Button 
                className='my-btn-o'
                onClick={() => clickBox()}>
            {value}
            </Button>
        )
    }
    
    
}
    


Square.propTypes = {
    value: PropTypes.string,
    boxOfWin: PropTypes.bool,
    clickBox: PropTypes.func,
    row: PropTypes.number,
    col: PropTypes.nuber,
}
export default Square