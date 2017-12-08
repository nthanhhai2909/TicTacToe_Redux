import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../css/index.css'
import Parameter from './ParameterGame'
import Board from  './Board'
import {Grid, Row, Col} from 'react-bootstrap'

const PlayGame = ({board, clickBox, turn}) => (
    <div>
        <Header/>
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
                        clickBox={(row, col) => clickBox(row, col)}
                    />
                </Col>
            </Row>
        </Grid>
        
    </div>
)


PlayGame.propTypes = {
    turn:PropTypes.string,
    board: PropTypes.array,
    clickBox: PropTypes.func
}

export default PlayGame