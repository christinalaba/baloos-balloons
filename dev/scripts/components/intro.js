import React from 'react';
import ReactDOM from 'react-dom';


class Intro extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            
            <div className="intro">
                <p className="partyPooper">This is Baloo.</p>
                <img className="baloo" src="./dev/assets/baloo.png" alt="fight cat"/>
                <p> He's a party pooper. Help him ruin this party by popping as many balloons as you can!</p>
                <button>
                    <p>Party Time</p>
                </button>
            </div>
        )
    }


}



export default Intro