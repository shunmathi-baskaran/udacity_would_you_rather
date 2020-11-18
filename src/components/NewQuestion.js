import React, { Component } from 'react'
import {handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        redirect: false
    }
    
    //dispatch add new question
    addQuestion= (event) => {
        event.preventDefault();
        const {optionOneText,optionTwoText} = this.state;
        const { dispatch } = this.props;
        if(optionOneText !== '' && optionTwoText !== ''){
            dispatch(handleAddQuestion(optionOneText, optionTwoText));
            this.setState({
                optionOneText: '',
                optionTwoText: '',
                redirect: true
            })
        }else {
            alert('Blank is not a valid value')
        }
    }

    // set new text to state
    handleTextChange=(event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        if(this.state.redirect===true) {
            return <Redirect to='/home' />
        }
        return (
            <div className="new-question">
                <h2>Create New Question</h2>
                <h3>Complete the question</h3>
                <h4>Would you rather...</h4>
                <form className="qn-form">
                <input id="optionOne" name="optionOneText" type="text" placeholder="Enter Option 1 text here" 
                    value={this.state.textOneText} onChange={this.handleTextChange}/>
                <p>OR</p>
                <input id="optionTwo" name="optionTwoText" type="text" placeholder="Enter Option 2 text here"
                    value={this.state.textTwoText} onChange={this.handleTextChange}/>
                    <br/>
                <button type="submit" className="submit-btn" onClick={(event)=> this.addQuestion(event)}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]
    return {
        authedUser,
        user,
    }
}

export default connect(mapStateToProps)(NewQuestion)