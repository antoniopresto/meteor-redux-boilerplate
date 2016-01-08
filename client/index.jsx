Meteor.startup(function(){
  import { render } from "react-dom"
  import React from "react"
  import { Provider } from "react-redux"
  import App from "./containers/App.jsx"
  import store from "./store"

  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
})
