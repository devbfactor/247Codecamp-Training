import Header from './components/Header.js';
import Card from './components/Card.js';
import Jumbotron from './components/Jumbotron.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Card name = 'Bag' desc ='awesome bag' />
      <Card name = 'Shirt' desc = 'cool shirt' />
      <Card desc = 'no product name passed. Default Property' />
    </div>
  );
}

export default App;
