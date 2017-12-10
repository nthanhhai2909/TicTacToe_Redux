import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
const HistoryItem = ({isSelect, rowIndex, colIndex, clickItemHistory}) => {

    let move;
    if(rowIndex === -1){
        move = 'start'
    }
    else{
        move = rowIndex + ' - ' + colIndex;
    }

    
    return( 
        isSelect ?
            <RaisedButton
                style={{marginRight:30, marginBottom:10}}
                secondary={true}  
                onClick={() => clickItemHistory(rowIndex, colIndex)}
                >
                Move to {move}
                
            </RaisedButton>
        :
            <RaisedButton 
                primary={true}
                style={{marginRight:30, marginBottom:10}}
                onClick={() => clickItemHistory(rowIndex, colIndex)}
                 >
                Move to {move}
            </RaisedButton>
            
        
    )
    
}

HistoryItem.propTypes = {
    isSelect:  PropTypes.bool,
    rowIndex: PropTypes.number,
    colIndex: PropTypes.number,
    clickItemHistory: PropTypes.func,
}

export default HistoryItem