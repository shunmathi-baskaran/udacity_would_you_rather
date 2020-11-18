import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile';

class LeaderBoard extends Component {
    //calculate overall score of a user
    calculateScore =(user) => {
        return (Object.keys(user.answers).length) + (user.questions.length)
    }
    render() {
        const {users } = this.props;
        return (
            <div className="users">
               <ul>
                {Object.values(users).sort((a,b)=> this.calculateScore(b)- this.calculateScore(a)).map(user => {
                return  <li key={user.id}>
                            <UserProfile user={user} calculateScore={this.calculateScore}/>
                        </li>
                })}
               </ul>
            </div>
        )
    }
}


function mapStateToProps({users}) {
    return {
        users
    }
}


export default connect(mapStateToProps)(LeaderBoard)