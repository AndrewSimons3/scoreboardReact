import React from 'react';
import Header from './Header';
import Player from './Player';


class App extends React.Component {

  state = {
    players: [
      {
        name: "Andrew",
        id: 1
      },
      {
        name: "Ashley",
        id: 2
      },
      {
        name: "James",
        id: 3
      },
      {
        name: "Simon",
        id: 4
      }
    ]
  };

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
        totalPlayers={this.state.players.length}
        />

        {this.state.players.map( player => 
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;