import React from 'react';
import './App.css';
import Board from './components/Board';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pazaak</h1>
        <p>
          A game of champions.
        </p>
        <div>
          <Grid container>
            <Board className="board" />
            <Board className="board" />
          </Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
