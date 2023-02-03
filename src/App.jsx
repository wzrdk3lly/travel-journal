import world from "./assets/globe.png";
import Card from "./Card";
import arrayOfObjects from "./data";

let cardElements = arrayOfObjects.map((item) => (
  <Card key={item.id} item={item} />
));

// Create a map function here that allows you to iterate through your
// Data file and returns an array of the card components

function App() {
  return (
    <div className="App">
      <header className="header--travel">
        <img className="img--world" src={world} /> my travel journal.
      </header>

      {cardElements}
    </div>
  );
}

export default App;
