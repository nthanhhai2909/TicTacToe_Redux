import React from 'react'
import PropTypes from 'prop-types';
import Square from './Square'
import '../css/index.css'

const Cell = ({cell, rowIndex, clickBox}) =>(
    <div>
        {
            cell.map((element, index) => 
            <Square
                clickBox={() => clickBox(rowIndex, index)}
                value={element}
            />
            )
        }
        <br/>
    </div>
    
)
      

Cell.propTypes = {
    cell: PropTypes.array.isRequired,
    rowIndex: PropTypes.number,
    clickBox: PropTypes.func
}

export default Cell