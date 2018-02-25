import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import Balloon from './components/balloon';
import ScoreBoard from './components/scoreboard'
// import Transition from 'react-transition-group/Transition';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component {
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

//this function runs when play button is pressed 
  runApp() {
    this.setState ({
      loadReady: true
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="gameBoard">
          <ScoreBoard score={this.state.score} />

          {/* if play button is pressed, then balllons will render */}
          { this.state.loadReady === true &&
            <div>
            {
              // using lodash library to call the balloon element a set number of times
              lodash.times(50, (i) => {
                return (<Balloon updateScore={this.updateScore} key={i} index={i} />)
              })
            }
            </div>
          }
   
        </div>
        
        <div className="controls">
          <button onClick={this.runApp}>
            <i className="fas fa-play"></i>
          </button>

          <button>
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
