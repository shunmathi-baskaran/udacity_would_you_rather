import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import PageNotFound from './PageNotFound'


class AnswerQuestion extends Component {
    state = {
        selectedOption: '',
    }
    
    //dispatch calling for saving the answer to a question
    answerQuestion= (event) => {
        event.preventDefault();
        const {selectedOption} = this.state;
        const { dispatch, question } = this.props;
        dispatch(handleAnswerQuestion(question.id, selectedOption));
        this.props.history.push(`/results/${question.id}`);
    }

    //onchange function for radio button value
    setRadioButtonValue = (event) => {
        const selectedOption = event.target.value;
        this.setState({
            selectedOption
        })
    }

    render() {
        //Rendering PageNotFound if error in question id
        if(this.props.question === undefined) {
            return <PageNotFound />
        }
        return (
            <div className="question">
                <div  className="question-header">
                <h3>{this.props.author.name}</h3>
                <img className="avatar" src={this.props.author.avatarURL} alt=""/>
                </div>
                <form className="question-info">
                    <h4>Would you rather?</h4> 
                    <div>
                        <input type="radio" name="wouldYouRather" value="optionOne" id="optionOne"
                            onClick={(event)=> this.setRadioButtonValue(event)} />
                        <label htmlFor="optionOne">{this.props.question.optionOne.text}</label>
                    </div>
                    <div>
                        <input type="radio" name="wouldYouRather" value="optionTwo" id="optionTwo"
                            onClick={(event)=> this.setRadioButtonValue(event)} />
                        <label htmlFor="OptionTwo">{this.props.question.optionTwo.text}</label> 
                    </div>
                    <button className="submit-btn" onClick={(event) => this.answerQuestion(event)}>Submit</button>
                </form>
                    
            </div>
        )
    }
}


function mapStateToProps({ questions, users, authedUser }, props) {
    const id  = props.match.params.id ? props.match.params.id : undefined;
    const  question =  questions[id] ? questions[id] : undefined
    const author =  question ? users[question.author] : undefined
    const user = users[authedUser] ? users[authedUser] :undefined
    return {
        authedUser,
        question,
        user,
        author
    }
}


export default connect(mapStateToProps)(AnswerQuestion)