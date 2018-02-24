import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Balloon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balloon: true,
            balloon_css: ''
        }
        this.pop = this.pop.bind(this);
    }


    //this removes balloon
    pop() {
        this.setState({
            balloon_css: "balloon-leaving"
        });
    }


    render() {
        return (

            <div>
                <div onClick={this.pop}>
                    <img src="/dev/assets/balloon.png" alt="" className={"balloon " + this.state.balloon_css} />
                </div>
            </div>
        )
    }
}

export default Balloon 