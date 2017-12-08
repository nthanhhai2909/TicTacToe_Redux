
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeContainer from './HomeContainer'
import PlayGameContainer from './PlayGameContainer'
const App = () => (
    <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route exact path='/playgame' component={PlayGameContainer}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App