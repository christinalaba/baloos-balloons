import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


 
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {}
    
  }
  
  
  //this starts the animation loop for all the baloons
  play() {
  }
  
  
  //this removes balloon
  pop() {
    this.setState({
      opacity: 0
    })
  }
  
  //this ads to the points tally
  increaseCounter() {
  }
  
  render() {
    return (
      
      <div>
        <div className="scoreBoard">
          <p>Score:</p>
        </div>
        <div className="canvas">
          <ReactCSSTransitionGroup>
            <img src="/dev/assets/balloon.png" alt="" className="balloon" />
          </ReactCSSTransitionGroup>
        </div>
        <form>
          <input type="submit" onClick={this.play} />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));