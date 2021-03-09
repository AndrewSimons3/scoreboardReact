import React, { Component } from 'react';
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
    return (
      <div className="scoreboard">
        <Header 
        title="My Scoreboard" 
        players={this.state.players}
        />

        {this.state.players.map( (player, index) => 
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}
//export default
export default App;