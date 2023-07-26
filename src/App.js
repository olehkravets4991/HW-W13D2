import logo from './logo.svg';
import './App.css';
import moviesData from './moviesData/Movies';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Movies movies={moviesData}/>
 
    </div>
  );
}

export default App;

