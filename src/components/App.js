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
import {Route} from 'react-router-dom'


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
            <Route exact path='/' component= {Login} />
            <Route exact path='/home' component= {Home} />
            <Route exact path='/question/:id' component = {AnswerQuestion} />
            <Route exact path='/results/:id' component = {ResultsPage} />
            <Route exact path='/add' component = {NewQuestion} />
            <Route exact path='/leaderBoard' component = {LeaderBoard} />
          </Fragment>
        </div>
      </Fragment>
    )
  }
 
}

export default connect()(App);
