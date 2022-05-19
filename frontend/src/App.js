import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import CompLogin from './components/compLogin';
import CompPrivado from './components/compPrivado';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<CompLogin />} />
        <Route path="/privado" element={<CompPrivado />} />
      </Routes>

    </div>
  );
}

export default App;
