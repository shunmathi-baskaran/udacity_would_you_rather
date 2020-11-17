import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsView from './ResultsView'
import { Redirect } from 'react-router-dom'

class ResultsPage extends Component {
    
    render() {
        if(this.props.authedUser === null) {
            return <Redirect to='/' />
        }
        const {user, author, question} = this.props;
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        return (
            <div className="results">
                <div className="question-header">
                <h3>Asked by {author.name}</h3>
                <img className="avatar" src={author.avatarURL} alt=""/>
                </div>
                { (user!==undefined && 
                    <div className="question-info">
                        <ResultsView totalVotes={totalVotes} option={question.optionOne} userId={user.id}/>
                        <ResultsView totalVotes={totalVotes} option={question.optionTwo} userId={user.id}/>
                    </div>)  
                }
            </div>
        )
    }
}


function mapStateToProps({ questions, users, authedUser }, props) {
    const id  = props.match.params.id ? props.match.params.id : undefined;
    const  question = questions[id] ? questions[id] : undefined
    const author = question ? users[question.author] : undefined
    const user = users[authedUser] ? users[authedUser] :undefined
    return {
        question,
        user,
        author,
        authedUser
    }
}


export default connect(mapStateToProps)(ResultsPage)