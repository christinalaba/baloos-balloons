import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import Balloon from './components/balloon';
import Puffy from './components/puffy';
import ScoreBoard from './components/scoreboard';
import Firebase from './components/firebase';
import Intro from './components/intro';
import Scrollchor from 'react-scrollchor';
import Timer from './components/timer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0,
      loadReady: false,
      leaderBoard: false,
      timer: 0,
      timerReady: false
    }
    this.addScore = this.addScore.bind(this)
    this.minusScore = this.minusScore.bind(this)
    this.releaseBalloons = this.releaseBalloons.bind(this)
    // this.runFirebase = this.runFirebase.bind(this)
    this.enterLeaderboard = this.enterLeaderboard.bind(this)
  }

//add one point on pop of baloon  
  addScore() {
    let newScore = this.state.score + 1;
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
      loadReady: true,
      timerReady: true
    });
  }



  enterLeaderboard(){
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
            

        {this.state.timerReady ?  
        <div>
          <Timer time={this.state.seconds} />
        </div>
        :
        null
        }

        <div id="gameScreen">
          
          <div className="gameBoard">
            <ScoreBoard score={this.state.score} timer={this.state.timer} />

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
            
            <button onClick={this.enterLeaderboard}>
              <i className="fas fa-trophy"></i>
            </button>

            {this.state.leaderBoard ?
              <div>
                <div className="scoreScreen" id="scoreScreen">
                  <Firebase score={this.state.score} />
                </div>
              </div>
              :
              null
            }

          </div>
        </div>
        
        <p className="credit">&copy;Christina Laba</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
