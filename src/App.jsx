 // code in App.js creates a component
 // NOTE: componenets (Board and Square) must start w capital letter


// state to remember stuff like if been clicked
 import { useState } from 'react';


 function Square() {
  const [value, setValue] = useState(null); //The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

  function handleClick() {
    setValue('X');
  }

  //return <button className="square">{value}</button>;
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  //return <button className="square">X</button>; //<button> is a JSX element. A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 

  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}