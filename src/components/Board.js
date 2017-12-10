import React from 'react'
import PropTypes from 'prop-types';
import Cell from './Cell'
import '../css/index.css'
import RaisedButton from 'material-ui/RaisedButton'

const Board = ({board, clickBox, listChessOfWin, resetGame}) => (
    <div>
        <div className='Aligner'>
            <h3>Board</h3>
            
            <hr />
        </div>
        
        {
            board.map((element, index) =>
            <Cell cell={element}
                rowIndex={index}
                clickBox={(row, col) => clickBox(row, col)}
                listChessOfWin={listChessOfWin}
            />
            )
        }
    </div>
    
)


Board.propTypes = {
    board: PropTypes.array.isRequired,
    clickBox: PropTypes.func,
}

export default Board