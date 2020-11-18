import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom';
import  {setAuthedUser}  from '../actions/authedUser'

class Login extends Component {
    state = {
        redirect: false,
        option: ''
    }
    
    //event handler for user id selection
    setOptionValue(event) {
        const option = event.target.value;
        this.setState({
            option
        })
    }

    //set AuthedUse on login
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
        const  {from}  = this.props.location.state || '/'
        const {userIds} = this.props;
        const {redirect }=this.state;

        if(redirect === true) {
            if(from === undefined){
                return <Redirect to= '/home' />
            }else{
                return <Redirect to= {from} />
            }
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

export default withRouter(connect(mapStateToProps)(Login))