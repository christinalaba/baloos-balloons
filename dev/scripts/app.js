import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      balloon: false
    }
  }

  
  //this removes balloon
  pop() {
    
  }
  
 
  
  render() {
    return (
      
      <div>
        <div className="scoreBoard">
          <p>Score:</p>
        </div>
        <div className="canvas">
         {this.state.balloon === true ?
          <img src="/dev/assets/balloon.png" alt="" className="balloon"/>
          false: ''}
        
        </div>
        <form>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




// //this starts the animation loop for all the baloons
// play() {
// }

// //this ads to the points tally
// increaseCounter() {
// }