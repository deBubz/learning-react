import React from 'react'
import Board, { calcWinner } from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calcWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'x' : 'o'
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext
    })
  }
  
  render() {
    const history = this.state.history;
    const current = history[history.length - 1]
    const winner = calcWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game Start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}> {desc} </button> 
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      alert((winner) +' wins the game');
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares} 
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game