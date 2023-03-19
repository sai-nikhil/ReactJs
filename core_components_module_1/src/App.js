import './App.css';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <SearchBar></SearchBar>
      <Movies></Movies>
    </div>
  );
}

export default App;
