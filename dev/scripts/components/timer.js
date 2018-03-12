import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 28,
            count: 28,
            enabled: false,
            timeout:0
        }
    }

    render() {
        return (
            
            <div>
                
                <div>
                    
                    {/* {this.state.loadReady === true ? */}

                    <ReactInterval timeout={1000} enabled={true}
                        callback={() => this.setState({ count: this.state.count - 1 })} />
            
                </div>
                
                <div>
                    <p className="countdown">{this.state.count}</p>
                </div>

                {/* <button onClick={() => this.setState({ enabled: true })}>
                Start</button> */}
      
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
        