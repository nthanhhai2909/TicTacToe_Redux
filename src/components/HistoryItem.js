import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
const HistoryItem = ({isSelect, row, col}) => {
    let move;
    if(row === -1){
        move = 'start'
    }
    else{
        move = row + ' - ' + col;
    }

    return( 
        isSelect ?
            <RaisedButton
                style={{marginRight:30, marginBottom:10}}
                secondary={true}  >
                Move to {move}
            </RaisedButton>
        :
            <RaisedButton 
                primary={true}
                style={{marginRight:30, marginBottom:10}}
                 >
                Move to {move}
            </RaisedButton>
            
        
    )
    
}

HistoryItem.propTypes = {
    isSelect:  PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number,
}

export default HistoryItem