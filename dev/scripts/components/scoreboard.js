import React, { Component } from 'react';

class ScoreBoard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="scoreBoard">
                <p>Score:
          <span id="currentScore">{this.props.score}</span>
                </p>
            </div>
        )
    }
}

export default ScoreBoard 