import React from 'react'

export default function UserProfile(props) {
    const {user, calculateScore} = props;
    return  (
        <div className="user">
            <div className="user-header">
                <h1>{user.name}</h1>
                <img className="avatar" src={user.avatarURL} alt=""/>
            </div>
            <div className="user-info">
                <p>Answered Questions: {Object.keys(user.answers).length}</p>
                <p>Created Questions: {user.questions.length}</p>
                <p>Score: {calculateScore(user)}</p>
            </div>
        </div>
    )
}