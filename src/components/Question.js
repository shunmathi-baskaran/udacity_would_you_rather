import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PageNotFound from './PageNotFound'

class Question extends Component {
    render() {
        if(this.props.question === undefined) {
            return <PageNotFound />
        }
        return (
            <div className="question">
                <div className="question-header">
                <h3>{this.props.question.author}</h3>
                <img className="avatar" src={this.props.author.avatarURL} alt=""/>
                </div>
                <div className="question-info">
                    <h4>Would you rather?</h4>
                    <p>{this.props.question.optionOne.text}</p>
                    <p>{this.props.question.optionTwo.text}</p>
                    {(this.props.type === 'unanswered') && (
                <Link to={`/question/${this.props.question.id}`}>
                    <button className="submit-btn">View Poll</button>
                </Link>
                )}
                   {(this.props.type === 'answered') && (
                <Link to={`/results/${this.props.question.id}`}>
                    <button className="submit-btn">View Poll</button>
                </Link>
                )}
                </div>
            </div>
        )
    }
}


function mapStateToProps({ questions, users, authedUser }, { id,type }) {
    const  question = questions[id] ? questions[id] : undefined
    const author =  question ? users[question.author] : undefined
    const user = users[authedUser] ? users[authedUser] :undefined
    return {
        authedUser,
        question,
        user,
        author,
        type
    }
}

export default connect(mapStateToProps)(Question)