import './App.css';
import { Navbar, Footer } from './components';
import { Routes, Route } from "react-router-dom";
import { HomePage, JoinUsPage } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route path='join-us' element={<JoinUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
