 // code in App.js creates a component
 // NOTE: componenets (Board and Square) must start w capital letter


// state to remember stuff like if been clicked
 import { useState } from 'react';


function Square({value}) {
  return <button className="square">{value}</button>;
}

export default function Board() { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  // lifting state into the parent
  const [squares, setSquares] = useState(Array(9).fill(null));

  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
       <div className="board-row">
        <Square value={squares[0]} />
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