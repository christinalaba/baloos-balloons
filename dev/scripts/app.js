import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import Balloon from './components/balloon';
import Puffy from './components/puffy';
import ScoreBoard from './components/scoreboard';
import Firebase from './components/firebase';
import Intro from './components/intro';
import Scrollchor from 'react-scrollchor';


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

 

  render() {
    return (
      
      <div className="wrapper">
        <div id="introScreen">
          <Intro />
        </div>
        
        <div id="gameScreen">
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
            <button onClick={this.forward}>
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
        
        <div className="scoreScreen" id="scoreScreen">
          <Firebase score={this.state.score} />
        </div>
        
        <p className="credit">&copy;Christina Laba</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
