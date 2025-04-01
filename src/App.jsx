 // code in App.js creates a component
 // NOTE: componenets (Board and Square) must start w capital letter


// state to remember stuff like if been clicked
 import { useState } from 'react';


 // props
function Square({ value, onSquareClick }) {
  // state is private to the parent, so need to call onSqareClick instead of updating directly in Sqaure()
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  // lifting state into the parent
  const [squares, setSquares] = useState(Array(9).fill(null));

  
  function handleClick() {
    // creates a copy of the squares array
    const nextSquares = squares.slice();
    // updates the nextSquares array to add X to the first ([0] index) square.
    nextSquares[0] = "X";
    // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
    setSquares(nextSquares);
  }


  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
       <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}