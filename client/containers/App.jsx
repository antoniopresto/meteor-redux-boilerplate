import React from "react"
import { Link } from 'react-router'
import { connect } from "react-redux"
import { pushPath } from "redux-simple-router"
import { incrementCount } from "../actions"

class App extends React.Component {
  render(){
    const {
      children,
      dispatch,
      count = 'vazio'
    } = this.props

    console.log({props: this.props})
    window.increment = () => dispatch( incrementCount() )
    return(
      <div>
        <Link to="/"> / </Link><br/>
        <Link to="/2"> /2 </Link><br/>
        <Link to="/3"> /3 </Link><br/>

        {JSON.stringify(this.props.location)}

        <a onClick={() => dispatch( incrementCount() )}>
          <h1>Count: { count } ++</h1>
        </a>

        <hr />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log({state})

  return {count: state.count.count }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
