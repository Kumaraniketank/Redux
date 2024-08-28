import Amount from "./Amount";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Amount />
      </div>
    </>
  );
}

export default App;
