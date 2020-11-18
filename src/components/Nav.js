import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {resetAuthedUser}  from '../actions/authedUser'
import { Redirect } from 'react-router-dom';

export class Nav extends Component {
    //dispatch reset AuthedUser on logout
    logout = (event) => {
        event.preventDefault();
        const {dispatch} = this.props;
        dispatch(resetAuthedUser())
    }

    render() {
        if(this.props.authedUser === null) {
            return <Redirect to='/' />
        }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink exact to="/home" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/add" activeClassName="active">
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/leaderBoard" activeClassName="active">
                        LeaderBoard
                    </NavLink>
                </li>
            </ul>
            {this.props.authedUser !==null && (
                <div>
                    <h3>{this.props.user.name}</h3>
                    <img className="avatar" src={this.props.user.avatarURL} alt=""/>
                    <button id="logoutBtn" type="button" onClick={(event => this.logout(event))}>Logout</button>
                </div>
            )}
        </nav>
    )
    }
}
function mapStateToProps({authedUser, users}){
    return {
        authedUser: authedUser ? authedUser : null,
        user: authedUser? users[authedUser]: ''
    }
}
export default connect(mapStateToProps)(Nav)