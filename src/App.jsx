import './App.css';
import Header from './components/Header';
import MainBanner from './pages/MainBanner';
import PiedraPapelTijerasPage from './pages/PiedraPapelTijerasPage';
import Footer from './components/Footer';
import JuegosPage from './pages/JuegosPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JuegoMemoria from './components/juegoMemoria/JuegoMemoria';
import DeveloperPage from './pages/DeveloperPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainBanner></MainBanner>} />
          <Route path='/Juegos' element={<JuegosPage></JuegosPage>} />
          <Route path='/PiedraPapelTijera' element={<PiedraPapelTijerasPage></PiedraPapelTijerasPage>} />
          <Route path='/JuegoMemoria' element={<JuegoMemoria></JuegoMemoria>} />
          <Route path='/Developer' element={<DeveloperPage></DeveloperPage>} />
          <Route path='*' element={<h1>NOT FOUND!</h1>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
