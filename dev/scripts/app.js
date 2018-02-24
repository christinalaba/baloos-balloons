import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
// import Transition from 'react-transition-group/Transition';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Balloon from './components/balloon';
import ScoreBoard from './components/scoreboard'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0,
      loadReady: false,
    }
    this.updateScore = this.updateScore.bind(this)
    this.runApp = this.runApp.bind(this)
  }

  updateScore() {
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })
  }

  runApp() {
    this.setState ({
      loadReady: true
    })
  }

  render() {
    return (
      <div>
        <div className="canvas">
          <ScoreBoard score={this.state.score} />
             
          { this.state.loadReady === true &&
            <div>
            {
              lodash.times(100, (i) => {
                return (<Balloon updateScore={this.updateScore} key={i} index={i} />)
              })
            }
            </div>
          }
   
        </div>
        <button onClick={this.runApp}>
          Play
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
