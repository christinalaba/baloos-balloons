import React from 'react';
import ReactDOM from 'react-dom';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAiFutpKvXvopOuWzM2MDsfUKTt8qTaosI",
    authDomain: "baloos-balloons.firebaseapp.com",
    databaseURL: "https://baloos-balloons.firebaseio.com",
    projectId: "baloos-balloons",
    storageBucket: "",
    messagingSenderId: "978736024292"
};
firebase.initializeApp(config);

class Firebase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topScore: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.addName = this.addName.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.topPoppers = this.topPoppers.bind(this);
        this.replay = this.replay.bind(this);
    }
    

    handleChange(e) {
        // console.log(e.target.value);
        this.setState ({
            name: e.target.value 
        });
    }
    

    addName(e) {
        e.preventDefault();

        const scoreStat= {
            name: this.state.name,
            score: this.props.score
        }

        const dbRef = firebase.database().ref();
        dbRef.push(scoreStat)

        this.state.name = '';

    }

    
    componentDidMount() {
        firebase.database().ref().on('value', (res) => {
            const userData = res.val();
            const dataArray = []
            // console.log(userData)
            for (let objectKey in userData) {
                userData[objectKey].key = objectKey;
                dataArray.push(userData[objectKey]);
            }
            console.log(dataArray)
            
            this.setState({
                topScore: dataArray
            }, () => {
                // console.log(this.renderSorted());
                this.setState({
                    topScore : this.topPoppers()
                })
            }
            )
        });
    }


    topPoppers() {
        let sortedScore = this.state.topScore.slice().sort((a, b) => {
            return a.score < b.score
        });
        return sortedScore;
    }


    //replay button
    replay() {
        window.location.reload();
    }

    render() {
        return(
            <div className="leaderBoard">
                {/* <p className="gameOver">PARTY'S OVER! </p> */}
                
                <form onSubmit={this.addName}>
                
                    <p className="score">Your Score: {this.props.score}</p>
                    
                    <div className="join">
                        <label htmlFor="playerName">Join the leader board:</label>
                        <input type="text" name="playerName" placeholder="Player Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <button className="addPlayer">
                        <p className ="fas fa-plus"></p>
                    </button>
                    <button className="replayGame" onClick={this.replay}>
                        <i className="fas fa-redo-alt"></i>
                    </button>
                </form>

                <p className="poppers">Top poppers</p>
                <ol>
                    {this.state.topScore.map((name, i) => {
                        return <li>{name.name} - {name.score}</li>
                    })}
                </ol>
                
            </div>
        )
    }
   
}


export default Firebase




 // handleClick() {
    //     const dbRef = firebase.database().ref();
    //     dbRef.push(this.state.userStat;
    //     this.setState({ userInput: "" })
    // }