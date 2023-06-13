import logo from "./logo.svg";
import "./App.css";

function App() {
  let str = `Hello Universe`;
  let pi = 3.141159;
  let active = true;

  return(
    <>
      <h1>{str}</h1>
      <h1>PI = {pi} !!</h1>

      <h1>{active ? "Good Morning" : "Good Morning"}</h1>

      {active && <h1>Good Evening</h1>}
      {active ? <h1>Good Morning</h1> : <h1>Good Night</h1>}
    </>
  );
}

export default App;
