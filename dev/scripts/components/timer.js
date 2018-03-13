import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 15,
            enabled: false,
            // timeout:0
        }
    }

    render() {
        return (
            
            <div>
                <div>
                    <ReactInterval timeout={1000} enabled={true}
                        callback={() => this.setState({ seconds: this.state.seconds - 1 })} />
                </div>
                

                {this.state.seconds > 0 ? 
                <div>
                    <p className="countdown">{this.state.seconds}</p>
                </div>
                :
                <div className="game-over-container">
                    <p className="gameOver">PARTY'S OVER! <br/> Click <i className="fas fa-trophy"></i> to join the leaderboard</p>
                </div>
                
                }
                
            </div>

        )
    }
}

export default Timer 



// const App = React.createClass({
//     getInitialState() {
//         return {
//             enabled: false,
//             timeout: 1000,
//             count: 0
//         };
//     },
        