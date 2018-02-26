import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import Balloon from './components/balloon';
import Puffy from './components/puffy';
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
    let newScore = this.state.score - 2 ;
    this.setState({
      score: newScore
    });
  }

//function runs when play button is pressed 
  releaseBalloons() {
    this.setState ({
      loadReady: true
    });
  }

  replay() {
      window.location.reload();
  }

  runFirebase() {
    this.setState({
      leaderBoard: true
    });
  }

  component


  render() {
    return (
      <div className="wrapper">
        
        <div className="gameBoard">
          <ScoreBoard score={this.state.score} />

            { this.state.loadReady === true &&
              <div>
                <div>
                { 
                  lodash.times(50, (i) => {
                    return (<Balloon addScore={this.addScore} key={i} index={i} />)
                  })
                }
                </div>
                
                <div>
                  {
                    lodash.times(10, (i) => {
                      return (<Puffy minusScore={this.minusScore} key={i} index={i} />)
                    })
                  }
                </div>
              </div>
            }
        </div>
        
        <div className="controls">
          <button onClick={this.releaseBalloons}>
            <i className="fas fa-play"></i>
          </button>
          <button onClick={this.replay}>
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
        
        <div>
          <Firebase score={this.state.score}/>

        </div>

        
      </div>
    )
  }
}









ReactDOM.render(<App />, document.getElementById('app'));
