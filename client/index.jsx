
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import React, { createClass } from 'react'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import store from './store'

React;

const Page1 = () => <h2>Page 1</h2>
const Page2 = () => <h2>Page 2</h2>
const Page3 = () => <h2>Page 3</h2>

Meteor.startup(function(){
  render(
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path='/' component={App}>
          <IndexRoute component={Page1} />
          <Route path='2' component={Page2} />
          <Route path='3' component={Page3} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
