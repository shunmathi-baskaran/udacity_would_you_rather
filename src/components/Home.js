import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';

class Home extends Component {
    state = {
        questionType : 'unanswered'
    }

    showAnsweredQuestions(event) {
        event.preventDefault();
        document.getElementById('unanswered-btn').classList.remove('active');
        event.target.classList.add('active');
        this.setState({
            questionType : 'answered'
        })
    }

    showUnAnsweredQuestions(event) {
        event.preventDefault();
        document.getElementById('answered-btn').classList.remove('active');
        event.target.classList.add('active')
        this.setState({
            questionType : 'unanswered'
        })
    }


    render() {
        const answers = this.props.user ? Object.keys(this.props.user.answers) : []
        return (
            <div className="home-container">
                <div className="btn-container">
                    <button onClick={(event) => this.showUnAnsweredQuestions(event)} 
                        className="active" id="unanswered-btn">Unanswered</button>
                    <button onClick={(event) => this.showAnsweredQuestions(event)}
                        id="answered-btn">Answered</button>
                </div>
                {(this.state.questionType === 'answered') && (
                <ul className="questions-list">
                {
                    this.props.questionIds && 
                        (this.props.questionIds.filter((id) =>  answers.includes(id))
                        .sort((a,b)=> {
                            return this.props.questions[b].timestamp - this.props.questions[a].timestamp
                        })
                            .map((id) => {
                                return <li key={id}>
                                            <Question id={id} type={'answered'}/>
                                        </li>
                            })
                        )
                }
                </ul>)}
                {(this.state.questionType === 'unanswered') && (
                    <ul className="questions-list">
                    {    
                        (this.props.questionIds && this.state.questionType === 'unanswered') && 
                        (this.props.questionIds.filter((id) =>  !answers.includes(id))
                        .sort((a,b)=> {
                            return this.props.questions[b].timestamp - this.props.questions[a].timestamp
                        })
                        .map((id) => {
                                return <li key={id}>
                                            <Question id={id} type={'unanswered'}/>
                                        </li>
                            })
                        )
                    }
                </ul>
                )}
            </div>
        )
    }
}


function mapStateToProps({ questions, users, authedUser }) {
    const user = users[authedUser]
    return { 
        questionIds : Object.keys(questions),
        questions,
        user
    }
}


export default connect(mapStateToProps)(Home)