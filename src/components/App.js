import React, {Component, Fragment} from 'react'
import '../App.css';
import Login from './Login'
import {handleInitialData } from '../actions/shared'
import {connect } from 'react-redux'
import Home from './Home'
import NewQuestion from './NewQuestion'
import AnswerQuestion from './AnswerQuestion';
import LoadingBar  from 'react-redux-loading'
import ResultsPage from './ResultsPage'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PageNotFound from './PageNotFound';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          <Nav />
          <Fragment>
            <Switch>
              <Route exact path='/' component= {Login} />
              <PrivateRoute  path='/home' component= {Home} />
              <PrivateRoute  path='/question/:id' component = {AnswerQuestion} />
              <PrivateRoute  path='/results/:id' component = {ResultsPage} />
              <PrivateRoute  path='/add' component = {NewQuestion} />
              <PrivateRoute  path='/leaderBoard' component = {LeaderBoard} />
              <Route path='*' component= { PageNotFound } />
            </Switch>
          </Fragment>
        </div>
      </Fragment>
    )
  }
}


export default connect()(App);
