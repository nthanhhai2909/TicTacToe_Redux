import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'
import Toggle from 'material-ui/Toggle'
import HistoryList from './HistoryList'
import RaisedButton from 'material-ui/RaisedButton'
const ParameterGame = ({turn, historys, toogleSortClick,
     sortByAscending, clickItemHistory,listChess, resetGame  }) => (
    <div>
        <h3>Parameter</h3>
        <hr />
        <RaisedButton
                    style={{marginBottom:20, width:250}}
                    label="NEW GAME"
                    primary={true} 
                    onClick={() => resetGame()}
                />
        <h4>Turn: {turn}</h4>
        <div className="Aligner">
            <span style={{marginRight:50, width:'80%'}}>Ascending</span>
            <Toggle
                label=""
                style={{width:'10%'}}
                labelStyle={{color:'black'}}
                onToggle={value => toogleSortClick(value) }
            /> 
        </div>
        <hr/>
        <h4>Steps</h4>
        <div className='list-steps' >
            <HistoryList
                listChess={listChess}
                sortByAscending={sortByAscending}
                clickItemHistory={(row, col) => clickItemHistory(row, col)}
            />
        </div>
    </div>
)

ParameterGame.propTypes = {
    turn: PropTypes.string,
    historys: PropTypes.func,
    sortByAscending: PropTypes.bool,
    clickItemHistory: PropTypes.func,
    listChess: PropTypes.array,
}

export default ParameterGame