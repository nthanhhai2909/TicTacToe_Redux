import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'


const HistoryList = ({historys, sortByAscending}) =>{
    let mHistory = JSON.parse(JSON.stringify(historys));
    if(!sortByAscending){
        mHistory = mHistory.reverse();
        return(
            mHistory.map((element, index) => {
                if(index === 0){
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
        return;
    }
    return(
        mHistory.map((element, index) => {
            if(index === mHistory.length - 1){
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
    historys: PropTypes.array,
    sortByAscending: PropTypes.bool,
}

export default HistoryList