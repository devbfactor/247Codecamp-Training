import Header from "./components/Header";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Card name = 'Bag' desc = 'awesome bag'/>
      <Card name = 'Shoe' desc = 'expensive shoeeee'/>
      <Card desc = 'dunnooo'/>
      
      
      
      {/* <h1>Haaallooooo </h1> */}
    </div>
  );
}

export default App;
