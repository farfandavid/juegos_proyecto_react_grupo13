import { useState } from 'react';
import './App.css';
import ImgJuego from './components/piedraPapelTijera/ImgJuego';

function App() {
  const [ganador, setGanador] = useState("");
  const [puntajes, setPuntajes] = useState([0, 0]);
  const [playerOne, setValor] = useState(1);

  const LanzarDados = () => {
    setValor(Math.floor(Math.random() * 3));

    if (playerOne === 1) {
      setGanador("El Jugador es el Jugador 1!");
      setPuntajes([puntajes[0] = 1 + puntajes[0], puntajes[1]]);
    } else if (playerOne === 2) {
      setGanador("El Jugador es el Jugador 2!");
      setPuntajes([puntajes[0], puntajes[1] = 1 + puntajes[1]]);
    } else {
      setGanador("Empate");
    }
    console.log(puntajes);
    return (playerOne);
  }

  return (
    <div className="App">
      <div className='Contenedor'>
        <div className='Jugador'>
          <div className='uno'>
            <h1>Jugador 1</h1>
            <ImgJuego imagen={playerOne}></ImgJuego>
            <label>Puntaje: {puntajes[0]}</label>
          </div>
          <div>
            <p>{ganador}</p>
          </div>
          <div className='dos'>
            <h1>Jugador 2</h1>
            <label>Puntaje:{puntajes[1]} </label>
          </div>
        </div>
        <button onClick={LanzarDados}>Jugar</button>
      </div>
    </div>
  );
}

export default App;
