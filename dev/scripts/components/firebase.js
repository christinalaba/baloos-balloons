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
            playerNames: [],
            name: "",
            playerScore: 60,
            topScore: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addName = this.addName.bind(this);
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

        const nameState = Array.from(this.state.playerNames);
        nameState.push(this.state.name);
        
        this.setState({
            playerNames: nameState,
            name: ""
        });

        const dbRef = firebase.database().ref();
        dbRef.push(scoreStat)

    }

    componentDidMount() {
        firebase.database().ref().on('value', (res) => {
            console.log(res.val());
        })
    }


    render() {
        return(
            <div className="leaderBoard">
                <p className="gameOver">PARTY'S OVER! </p>
                
                <form onSubmit={this.addName}>
                
                    <p className="score">Your Score: {this.props.score}</p>
                    
                    <div className="join">
                        <label htmlFor="playerName">Join the leader board:</label>
                        <input type="text" name="playerName" placeholder="Player Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <button className="addPlayer">
                        <p className ="fas fa-plus"></p>
                    </button>
                </form>

                <p className="poppers">Top poppers</p>
                <ol>
                    {this.state.playerNames.map((playerName, i) =>{
                        return <li key={`playerName-${i}`}>{playerName}: {this.props.score}</li>
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