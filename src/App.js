import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ReactCsvFile from "./components/ReactCsvFile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/filename" element={<ReactCsvFile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
