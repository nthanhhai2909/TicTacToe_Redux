import React from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'
import {changeNumberCell} from '../actions/home'
import PropTypes from 'prop-types'; 
class HomeContainer extends React.Component{

    constructor(props){
        super(props);
    
       
    }

    newGameClick(){
        if(this.props.message !== ''){
            return;
        }
        this.props.history.push('/playgame')
    }

    render(){
        return(
            <Home 
                message={this.props.message}
                newGameClick={() => this.newGameClick()}
                changeNumberCell={value => this.props.changeNumberCell(value)}
            />
        )
    }
}
const mapStateToProps = state => ({
    message: state.homeReducer.message
  })
  

 HomeContainer.propTypes = {
    message: PropTypes.string,
    changeNumberCell: PropTypes.func,
}

export default connect(mapStateToProps, {changeNumberCell}) (HomeContainer)