import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'
import Toggle from 'material-ui/Toggle'
import HistoryList from './HistoryList'
const ParameterGame = ({turn, historys}) => (
    <div>
        <h3>Parameter</h3>
        <hr />
        <h4>Turn: {turn}</h4>
        <div className="Aligner">
            <span style={{marginRight:50, width:'80%'}}>Ascending</span>
            <Toggle
                label=""
                style={{width:'10%'}}
                labelStyle={{color:'black'}}
            /> 
        </div>
        <hr/>
        <h4>Steps</h4>
        <div className='list-steps' >
            <HistoryList
                historys={historys}
            />
        </div>
    </div>
)

ParameterGame.propTypes = {
    turn: PropTypes.string,
    historys: PropTypes.func,
}

export default ParameterGame