import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound(props) {
    return (
        <div>
            <h2>Error 404</h2>
            <h3>Requested Content not found</h3>
            <h2>Please check the url and try again</h2>
            <p><Link to='/home'>Go to Home</Link></p>
        </div>
    )
}