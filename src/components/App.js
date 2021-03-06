import React, { Component } from 'react';
import { Provider } from './Context';
import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';


class App extends Component {

  state = {
    players: [
      {
        name: "Andrew",
        score: 0,
        id: 1
      },
      {
        name: "Ashley",
        score: 0,
        id: 2
      },
      {
        name: "James",
        score: 0,
        id: 3
      },
      {
        name: "Simon",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      return {
        score: prevState.players[index].score += delta
      };
    });
    console.log(delta);
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      }
    });
  }

  render () {
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          {this.state.players.map( (player, index) => 
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
              isHighScore={highScore === player.score}
            />
          )}

          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
      </Provider>
    );
  }
}
//export default
export default App;