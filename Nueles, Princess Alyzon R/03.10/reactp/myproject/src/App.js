import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Hello />
      <hr></hr>
      <Profile name="John" lastname="Doe" />
      <Profile name="Jane" lastname="Ford" />
      <Profile name="Josh" lastname="Smith" />
      <hr></hr>
      <Message messagecode="10" messagecontent="Message from props" />
      <hr></hr>
      <Counter />
      <hr></hr>
      <Resume name="Jake" />
      <hr></hr>
      <FunctionEvent />
      <hr></hr>
      <ClassEvent />
      <hr></hr>
      <FunctionalCounter />
      <hr></hr>
      <ConditionalComponent />
      <hr></hr>
      <Product />
      <hr></hr>
      <Form />
      <hr></hr>
    </div>
  );
}

export default App;
