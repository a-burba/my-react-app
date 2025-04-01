 // code in App.js creates a component
 // NOTE: componenets (Board and Square) must start w capital letter


 // "value" is a prop (to pass the value each square should have from the parent component (Board) to its child (Square).)
 // so that every square doesn't say 1
 function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
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
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}