import React from 'react'
import PropTypes from 'prop-types';
import Square from './Square'
import '../css/index.css'

const Cell = ({cell, rowIndex, clickBox, listChessOfWin}) =>{
        return(
            <div>
                {
                    cell.map((element, index) =>             
                                <Square
                                    clickBox={() => clickBox(rowIndex, index)}
                                    value={element}
                                    listChessOfWin={listChessOfWin}
                                    row={rowIndex}
                                    col={index}
                                />
                            )
                }
 
                        
            </div>
        )
    }

    
    

      

Cell.propTypes = {
    cell: PropTypes.array.isRequired,
    rowIndex: PropTypes.number,
    clickBox: PropTypes.func
}

export default Cell