import './App.css';
import UploadAndDisplayImage from './Components/UploadAndDisplayImage ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Classification with TensorflowJS</h1>

        <UploadAndDisplayImage></UploadAndDisplayImage>
      </header>
      <footer className="App-footer">
        <p>Made with ❤️</p>
        <a href="https://github.com/cenarturkmen/">Github</a>
      </footer>
    </div>
  );
}

export default App;
