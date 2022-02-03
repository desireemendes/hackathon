import './App.css';
import Header from './Components/Header';
import {Routes, Route} from "react-router-dom";
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
