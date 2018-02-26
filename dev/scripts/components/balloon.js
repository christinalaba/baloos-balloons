import React from 'react';
import ReactDOM from 'react-dom';


class Balloon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balloon: true,
            posX: 0,
            index: 0
        }
        this.pop = this.pop.bind(this)
    }

//sets position of ballons being rendred to the page at a random px location
    componentWillMount() {
        this.setState({
            posX: Math.floor(99 * Math.random())
        })
    }

//this removes balloon
    pop() {
            let balloonElement = document.getElementById('balloon-'+this.props.index)
            balloonElement.classList.add('balloon-leaving');
            this.props.addScore();
    }


//prevent the page from re-rendring after one baloon is removed from page
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
                            left: `${this.state.posX}%`,
                            animationDelay: `${Math.floor(20 * Math.random())}s`
                        }} />
                </div>
            </div>
        )
    }
}

export default Balloon 