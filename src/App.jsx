import world from "./assets/globe.png";
import Card from "./Card";

// Create a map function here that allows you to iterate through your
// Data file and returns an array of the card components

function App() {
  return (
    <div className="App">
      <header className="header--travel">
        <img className="img--world" src={world} /> my travel journal.
      </header>

      {/* convert this into a component */}
      <Card />
    </div>
  );
}

export default App;
