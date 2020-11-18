import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route, withRouter} from 'react-router-dom'

const PrivateRoute = ({ component:Component, authedUser, ...rest }) => {
    return (
      <Route {...rest} render={({location, ...rest}) => {
        return authedUser
          ? <Component {...rest}/>
          : <Redirect to={{
              pathname: '/',
              state: {from : location} 
          }}/>
      }} />
    )
  }

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))

