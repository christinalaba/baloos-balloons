import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Balloon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balloon: true,
            // balloon_css: '',
            posX: 0,
            index: 0
        }
        this.pop = this.pop.bind(this)
    }

    componentWillMount() {
        this.setState({
            posX: Math.floor(800 * Math.random())
        })
    }

    //this removes balloon
    pop() {
        // this.setState({
        //     balloon_css: "balloon-leaving"
        // }, function() {
            let balloonElem = document.getElementById('balloon-'+this.props.index)
            balloonElem.classList.add('balloon-leaving');
            this.props.updateScore();
        // });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div id={`balloon-${this.props.index}`}>
                <div onClick={this.pop}>
                    <img 
                        src="/dev/assets/balloon.png" 
                        alt="Balloon" 
                        className="balloon" 
                        style={{
                            left: `${this.state.posX}px`,
                            animationDelay: `${Math.floor(20 * Math.random())}s`
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Balloon 