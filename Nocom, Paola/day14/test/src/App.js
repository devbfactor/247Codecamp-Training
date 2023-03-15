import Header from "./components/Header";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Card name="Bag" desc="awesome bag"/>
      <Card name="Shirt" desc="cool shirt"/>
      <Card desc="cool shirt new"/>
    </div>
  );
}

export default App;