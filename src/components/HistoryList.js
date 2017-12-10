import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'


const HistoryList = ({listChess, sortByAscending, clickItemHistory}) =>{
    let mlistChess = JSON.parse(JSON.stringify(listChess));
    if(!sortByAscending){
        mlistChess = mlistChess.reverse();
        return(
            mlistChess.map((element, index) => {
                if(index === 0){
                    return(
                        <HistoryItem
                            isSelect={true}
                            rowIndex={element.row}
                            colIndex={element.col}
                            clickItemHistory={(row, col) => clickItemHistory(row, col)}
                        />
                    )
                }
                else{
                    return(
                        <HistoryItem
                            isSelect={false}
                            rowIndex={element.row}
                            colIndex={element.col}
                            clickItemHistory={(row, col) => clickItemHistory(row, col)}
                        />
                    )
                }
        
            })
        )
        return;
    }
    return(
        mlistChess.map((element, index) => {
            if(index === mlistChess.length - 1){
                return(
                    <HistoryItem
                        isSelect={true}
                        rowIndex={element.row}
                        colIndex={element.col}
                        clickItemHistory={(row, col) => clickItemHistory(row, col)}
                    />
                )
            }
            else{
                return(
                    <HistoryItem
                        isSelect={false}
                        rowIndex={element.row}
                        colIndex={element.col}
                        clickItemHistory={(row, col) => clickItemHistory(row, col)}
                    />
                )
            }
    
        })
    )
 
}
HistoryList.propTypes = {
    historys: PropTypes.array,
    sortByAscending: PropTypes.bool,
    clickItemHistory: PropTypes.func,
}

export default HistoryList