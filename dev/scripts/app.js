import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import Balloon from './components/balloon';
import ScoreBoard from './components/scoreboard';
import Firebase from './components/firebase';

// import Transition from 'react-transition-group/Transition';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0,
      loadReady: false,
      leaderBoard: false,
    }
    this.addScore = this.addScore.bind(this)
    this.minusScore = this.minusScore.bind(this)
    this.releaseBalloons = this.releaseBalloons.bind(this)
    this.runFirebase = this.runFirebase.bind(this)
  }


//add one point on pop of baloon  
  addScore() {
    let newScore = this.state.score + 1;
    // console.log(newScore);
    this.setState({
      score: newScore
    });
  }

// minus 3 point on click of blowfish
  minusScore() {
    console.log("minus");
    this.setState({
      score: this.state.score - 3
    });
  }

//function runs when play button is pressed 
  releaseBalloons() {
    this.setState ({
      loadReady: true
    });
  }

  runFirebase() {
    this.setState({
      leaderBoard: true
    });
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
                return (<Balloon addScore={this.addScore} key={i} index={i} />)
              })
            }
            </div>
          }
   
        </div>
        
        <div className="controls">
          <button onClick={this.releaseBalloons}>
            <i className="fas fa-play"></i>
          </button>
          <button>
            <i className="fas fa-redo-alt"></i>
          </button>

          <Firebase />
        </div>


        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
