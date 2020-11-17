import React, {Component} from 'react'

export default class ResultsView extends Component {
    calculatePercentage = (votes, totalVotes) =>{
        return ((votes / totalVotes)*100).toFixed(2);
    }

    render() {
        const {option, totalVotes, userId} = this.props;
        return (
            <div className="results-tab">
                {option.votes.includes(userId) && (
                    <h3>Your vote</h3>
                )}
                <div>
                    <h5>Would you rather {option.text}?</h5>
                    <span>Percentage: {this.calculatePercentage(option.votes.length, totalVotes)}</span>
                    <div>{option.votes.length} out of {totalVotes} votes</div> 
                </div>
            </div>
        )
    }
    
} 
