import './App.css';
import { Navbar, Footer } from './components';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
