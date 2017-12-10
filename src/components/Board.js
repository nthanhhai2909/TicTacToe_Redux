import React from 'react'
import PropTypes from 'prop-types';
import Cell from './Cell'
import '../css/index.css'


const Board = ({board, clickBox, listChessOfWin}) => (
    <div>
        <h3>Board</h3>
        <hr />
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