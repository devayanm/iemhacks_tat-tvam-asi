import './App.css';
import { Navbar, Footer } from './components';
import { Routes, Route } from "react-router-dom";
import { HomePage, JoinUsPage, SignINUPPage } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route path='join-us' element={<JoinUsPage />} />
        <Route path='sign-in-up' element={<SignINUPPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
