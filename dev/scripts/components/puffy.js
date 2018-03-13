import React from 'react';
import ReactDOM from 'react-dom';


class Puffy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            puffy: true,
            posX: 0,
            index: 0
        }
        this.ouch = this.ouch.bind(this);
    }

    //sets position being rendred to the page at a random px location
    componentWillMount() {
        this.setState({
            posX: Math.floor(99 * Math.random())
        })
    }

    ouch() {
        this.props.minusScore();
    }


    //prevent the page from re-rendring after one baloon is removed from page
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div id={`puffy-${this.props.index}`}>
                <div onClick={this.ouch}>
                    <img
                        src="./dev/assets/puffy.png"
                        alt="blow fish"
                        className="puffy"
                        style={{
                            left: `${this.state.posX}%`,
                            animationDelay: `${Math.floor(7 * Math.random())}s`
                        }} />
                </div>
            </div>
        )
    }
}

export default Puffy 