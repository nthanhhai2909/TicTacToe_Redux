import React from 'react'
import PropTypes from 'prop-types';
import '../css/index.css'
import {Button} from 'react-bootstrap'
import {changeBoard} from '../actions/playgame'

const Square = ({value, clickBox}) => (
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

Square.propTypes = {
    clickBox: PropTypes.func
}
export default Square