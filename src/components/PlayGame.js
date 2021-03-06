import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../css/index.css'
import Parameter from './ParameterGame'
import Board from  './Board'
import {Grid, Row, Col} from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { toogleDialog } from '../actions/playgame';


const PlayGame = ({board, clickBox, turn,
     showDialog, submitWin, playerWin,
      listChessOfWin, historys,
      submitEqual, showDialogEqual,
      toogleSortClick, sortByAscending,
      clickItemHistory, listChess, resetGame
     }) => {
        
    const actions = [
        <FlatButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onClick={() => submitWin()}
        />,
      ];
      const actionsEqual = [
        <FlatButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onClick={() => submitEqual()}
        />,
      ];
    return(
        <div>
        <Header/>
        <Dialog
            title="Match result"
            actions={actions}
            modal={false}
            open={showDialog}
            onRequestClose={() => submitWin()}
        >
            {playerWin} win 
        </Dialog>
        <Dialog
            title="Match result"
            actions={actionsEqual}
            modal={false}
            open={showDialogEqual}
            onRequestClose={() => submitEqual()}
        >
            EQUAL
        </Dialog>
        <Grid bsClass='container' style={{backgroundColor:'#004D40', color:"#E0F2F1", height: 600}}>
            <Row className="show-grid">
                <Col md={3}>
                    <Parameter 
                        turn={turn}
                        historys={historys}
                        toogleSortClick={(value) => toogleSortClick(value)}
                        sortByAscending={sortByAscending}
                        clickItemHistory={(row, col) => clickItemHistory(row, col)}
                        listChess={listChess}
                        resetGame={()=> resetGame()}
                    />
                </Col>
                <Col md={9} >
                    <Board
                        board={board}
                        listChessOfWin={listChessOfWin}
                        clickBox={(row, col) => clickBox(row, col)}
                        
                    />
                    
                </Col>
            </Row>
        </Grid>
        
        
    </div>
    )
    
}
    


PlayGame.propTypes = {
    showDialog: PropTypes.bool,
    submitWin: PropTypes.func,
    isWin: PropTypes.bool,
    turn:PropTypes.string,
    board: PropTypes.array,
    clickBox: PropTypes.func, 
    historys: PropTypes.array,
    showDialogEqual: PropTypes.bool,
    submitEqual: PropTypes.func,
    sortByAscending: PropTypes.bool,
    clickItemHistory: PropTypes.func,
    listChess: PropTypes.array,
}

export default PlayGame