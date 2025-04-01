 // code in App.js creates a component

export default function Square() { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  //return <button className="square">X</button>; //<button> is a JSX element. A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 

  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}