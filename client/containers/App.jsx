import React from "react"
import { connect } from "react-redux"

class App extends React.Component {
  render(){
    const { dispatch, count } = this.props
    return(
      <a onClick={() => dispatch({type: 'NADA'})}>
        <h1>{ count }</h1>
      </a>
    )
  }
}

const mapStateToProps = (state) => {
  return {count: state.count }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
