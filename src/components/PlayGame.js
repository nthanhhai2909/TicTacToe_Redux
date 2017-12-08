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


const PlayGame = ({board, clickBox, turn, showDialog, submitWin, playerWin, listChessOfWin }) => {
    const actions = [
        <FlatButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onClick={() => submitWin()}
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
        <Grid bsClass='container' style={{backgroundColor:'#004D40', color:"#E0F2F1"}}>
            <Row className="show-grid">
                <Col md={3}>
                    <Parameter 
                        turn={turn}
                    />
                </Col>
                <Col md={9} >
                    <h1>board</h1>
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
    clickBox: PropTypes.func
}

export default PlayGame