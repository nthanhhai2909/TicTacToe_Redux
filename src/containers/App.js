
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeContainer from './HomeContainer'
const App = () => (

    <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App