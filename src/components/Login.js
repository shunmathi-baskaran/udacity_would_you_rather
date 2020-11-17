import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import  {setAuthedUser}  from '../actions/authedUser'

class Login extends Component {
    state = {
        redirect: false,
        option: ''
    }

    setOptionValue(event) {
        const option = event.target.value;
        this.setState({
            option
        })
    }


    setAuthedUser(event){
        event.preventDefault();
        const {dispatch} = this.props;
        const user = document.getElementById('users').value;
        dispatch(setAuthedUser(user))
        this.setState({
            redirect: true
        })
    }

    render() {
        const {userIds} = this.props;
        const {redirect }=this.state;

        if(redirect === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className="login">
                <div className="header">
                <h2>Welcome to the Would You Rather App</h2>
                <p>Please sign in to continue</p>
                </div>
                <h2>Sign In</h2>
                <label htmlFor="users">Select user ID to continue</label>
                <br />
                <select name="users" id="users" value={this.state.option} onChange={(event)=> this.setOptionValue(event)}>
                    {
                        userIds.map((user) => {
                        return <option value={user} key={user}>{user}</option>
                        })
                    }
                </select>
                <br />
                <button className="btn" onClick={(event) => this.setAuthedUser(event)}>Log In</button>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return { 
        userIds : Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)