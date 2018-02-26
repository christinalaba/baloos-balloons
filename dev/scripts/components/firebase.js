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
    constructor(){
        super();
        this.state = {
            playerNames: ["christina", "jon-jon"],
            name: "",
            playerScore: 60,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState ({
            name: e.target.value 
        });
    }
    
    // handleClick() {
    //     const dbRef = firebase.database().ref();
    //     dbRef.push(this.state.userInput);
    //     this.setState({ userInput: "" })
    // }


    render (){
        return(
            <div className="leaderBoard">
                <p>PARTY TIME OVER! </p>
                
                <form>
                    <p className="playedScore">Your Score: {this.state.playerScore}</p>

                    <label htmlFor="playerName">Add name to join the leader board:</label>

                    <input type="text" name="playerName" value={this.state.name} onChange={this.handleChange}/>
                    
                    <button>ADD</button>
                </form>

                <p>Top 5 party poopers</p>
                <ol>
                    {this.state.playerNames.map((playerName, i) =>{
                        return <li key={`playerName-${i}`}>{playerName}</li>
                    })}
                </ol>
                
            </div>
        )
    }
}


// componentDidMount() {
//     const dbRef = firebase.database().ref();
//     dbRef.on('value', (response) => {
//         console.log(response.val());
//         const newState = [];
//         const data = response.val();

//         for (let key in data) {
//             newState.push(data[key]);
//         }

//         this.setState({
//             playerName: newState
//         });



//     });
// }

export default Firebase





// value={this.state.value} 
// onChange={this.handleChange}
// className = "fas fa-plus" />