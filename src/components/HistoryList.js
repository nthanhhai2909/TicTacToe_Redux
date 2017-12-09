import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'


const HistoryList = ({historys}) =>{
    return(
        historys.map((element, index) => {
            if(index === historys.length - 1){
             
                return(
                    <HistoryItem
                        isSelect={true}
                        row={element.row}
                        col={element.col}
                    />
                )
            }
            else{
                return(
                    <HistoryItem
                        isSelect={false}
                        row={element.row}
                        col={element.col}
                    />
                )
            }
    
        })
    )
   
    
    
}



HistoryList.propTypes = {
    historys: PropTypes.array
}

export default HistoryList