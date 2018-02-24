import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Balloon from './components/balloon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render() {
    return (
      <div>
        <div className="scoreBoard">
          <p>Score:</p>
        </div>
        <div className="canvas">
          <Balloon />
        </div>
        <form>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
