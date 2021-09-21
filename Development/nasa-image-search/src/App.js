import logo from './logo.svg';
import ImageSearch from '/components/ImageSearch'
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSearch fetchImages={this.fetchImages} />
    </div>
  );
}

export default App;
