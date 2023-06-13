import logo from "./logo.svg";
import "./App.css";

function App() {
  let str = "Hello World";

  return(
    <>
      <h1>Good AfterNoon</h1>
      <h1>{str}</h1>
    <h1>{str.toUpperCase()}</h1>
    <h1>{str.toLocaleLowerCase()}</h1>
    <h1>{str.substring(1,7)}</h1>
   
    </>
    
  );
}

export default App;
