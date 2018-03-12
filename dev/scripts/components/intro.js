import React from 'react';
import ReactDOM from 'react-dom';


class Intro extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            introScreen: true
        }
        this.closeIntro = this.closeIntro.bind(this)
    }

    closeIntro() {
        this.setState({
            introScreen: false
        });
    }

    render() {
        return (
            
            <div className={this.state.introScreen ? `intro` : `intro hide`} id="gameInstruction">
                <div className="introTextBlock">
                    <p className="partyPooper">This is Baloo.</p>
                    <img className="baloo" src="../../../public/assets/if_cat_fight_512p.png" alt="fight cat"/>
                    <p> He's a party pooper. Help him ruin this party by popping as many balloons as you can!</p>
                    <div className="positionCloseButton">
                        <button onClick={this.closeIntro} className="closeButton">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }


}



export default Intro