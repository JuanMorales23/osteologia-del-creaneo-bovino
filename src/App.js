import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Bibliography from "./components/Bibliography";
import Bones from "./components/Bones";
import Gallery from "./components/Gallery";
import Index from './components/Index';
import Neurocraneo from "./components/Neurocraneo";
import Viscerocraneo from "./components/Viscerocraneo";


function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
          <Route path="/:part" element={<Bones />} exact/>
          <Route path="/neurocraneo/:bone" element={<Neurocraneo />} exact/>
          <Route path="/viscerocraneo/:bone" element={<Viscerocraneo />} exact/>
          <Route path="/galeria" element={<Gallery />} exact/>
          <Route path="/bibliografia" element={<Bibliography />} exact/>
          <Route path="/" element={<Index />} />          
        </Routes>
    </Router>
      </div>
    </div>
  );
}

export default App;
