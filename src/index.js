import React , {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/App'

render(
    <Provider>
        <App/>
    </Provider>, document.getElementById('root')
)