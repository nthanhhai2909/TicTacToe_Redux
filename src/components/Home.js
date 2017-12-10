import React from 'react'
import Header from './Header'
import {Grid, Row, Col,} from 'react-bootstrap'
import Paper from 'material-ui/Paper'
import '../css/index.css'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types' 

const Home = ({message, newGameClick, changeNumberCell}) => {
    return(
    <div>
        <Header/>
        <Grid bsClass='container'>
            <Row className="show-grid">
                <Col md={6} mdOffset={3} className="home">
                    <Paper zDepth={2} style={{backgroundColor:'#B2DFDB'}}>
                        <h3>GAME CARO</h3>
                        <hr/>
                        <h3>SETTING GAME</h3>

                        <div className="Aligner">
                            <span style={{marginRight:30}}>Select number cell</span> 
                            <TextField
                                hintText="example: 5"
                                errorText={message}
                                onChange={e => changeNumberCell(e.target.value)}
                                type="number"
                            />
                        </div>
                        <br/>
                        <hr/>
                        <div className="Aligner">
                            <RaisedButton
                                label="NEW GAME"
                                primary={true} 
                                onClick={() => newGameClick()}
                            />
                        </div>
                        <br/> 
                    </Paper>
                </Col>
            </Row>
        </Grid>
    
    </div>
)}

Home.propTypes = {
    message: PropTypes.string,
    newGameClick: PropTypes.func,
    changeNumberCell: PropTypes.func,
}
export default  Home