 // code in App.js creates a component
 // NOTE: componenets (Board and Square) must start w capital letter


// state to remember stuff like if been clicked
 import { useState } from 'react';




 // props
function Square({ value, onSquareClick }) {
  // state is private to the parent, so need to call onSqareClick instead of updating directly in Sqaure()
  return (
    // onClick is built-in; all the other stuff is self-defined names, but
    // in React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}




// removing "export default" bc that's going over to Game() now
function Board({ xIsNext, squares, onPlay }) { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  
  // removed state handling here after adding Board
  
  function handleClick(i) {
    // return early if someone tries to play in a non-empty square or if someone won
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // creates a copy of the squares array
    // By default, all child components re-render automatically when the state of a parent component changes. This includes even the child components that weren’t affected by the change. 
    const nextSquares = squares.slice();

    // sets X or O depending on whose turn it is
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
    // updated to onPlay after adding Board
    onPlay(nextSquares);
  }

  // show if someone won and who's next
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* () => handleClick(0) is an arrow function, which is a shorter way to define functions. When the square is clicked, the code after the => “arrow” will run, calling handleClick(0). */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}





//  Just like you “lifted state up” from the Square component into the Board component, you will now lift it up from the Board into the top-level Game component. This gives the Game component full control over the Board’s data and lets it instruct the Board to render previous turns from the history.
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Before you can implement jumpTo, you need the Game component to keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // better way to keep track of turns
  // OLD: const currentSquares = history[history.length - 1]; // To render the squares for the current move, you’ll want to read the last squares array from the history
  // NEW: modify the Game component to render the currently selected move, instead of always rendering the final move:
  const currentSquares = history[currentMove];


  function handlePlay(nextSquares) {
    // these updates have to happen here now that they were removed from Board
    // OLD: setHistory([...history, nextSquares]); // creates copy array of history & appends nextSquares to the copy
    
    // NEW: If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point. Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // Each time a move is made, you need to update currentMove to point to the latest history entry.
  }


  // switching between past moves
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  
  // To render multiple items in React, you can use an array of React elements.
  // You already have an array of history moves in state, so now you need to transform it to an array of React elements. In JavaScript, to transform one array into another, you can use the array map method:
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      // Keys do not need to be globally unique; they only need to be unique between components and their siblings.
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });



  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


















// doesn't matter if you define this before or after Board
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}