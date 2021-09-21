import NavBar from './components/NavBar'
import ResultsContainer from './containers/ResultsContainer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar color='black' title='Nasa Image Search'/>
      <ResultsContainer />
    </div>
  );
}

export default App;
