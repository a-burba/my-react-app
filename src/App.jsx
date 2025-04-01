 // code in App.js creates a component

export default function Square() { //The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
  //return <button className="square">X</button>; //<button> is a JSX element. A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 

  // component needs to return a SINGLE jsx element 
  // use fragments to wrap multiple things instead
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}