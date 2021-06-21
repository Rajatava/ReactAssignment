import './App.css';
import Menu from './components/Menu/Menu'
import ImageDropBox from './components/ImageDropBox/ImageDropBox';

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        <Menu/>
      </header>
      <main>
        <ImageDropBox/>
      </main>
    </div>
  );
}

export default App;
