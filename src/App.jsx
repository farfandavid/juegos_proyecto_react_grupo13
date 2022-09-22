import { useState } from 'react';
import './App.css';

function App() {
  const [ganador, setGanador] = useState("");
  const [puntajes, setPuntajes] = useState([0, 0]);

  const LanzarDados = () => {
    let valor = Math.floor(Math.random() * 3);

    if (valor === 1) {
      setGanador("El Jugador es el Jugador 1!");
      setPuntajes([puntajes[0] = 1 + puntajes[0], puntajes[1]]);
    } else if (valor === 2) {
      setGanador("El Jugador es el Jugador 2!");
      setPuntajes([puntajes[0], puntajes[1] = 1 + puntajes[1]]);
    } else {
      setGanador("Empate");
    }
    console.log(puntajes);
    return (valor);
  }

  return (
    <div className="App">
      <div className='Contenedor'>
        <div className='Jugador'>
          <div className='uno'>
            <h1>Jugador 1</h1>
            <img alt='imagen Piedra Papel Tijera' />
            <label>Puntaje: {puntajes[0]}</label>
          </div>
          <div>
            <p>{ganador}</p>
          </div>
          <div className='dos'>
            <h1>Jugador 2</h1>
            <img alt='imagen Piedra Papel Tijera' />
            <label>Puntaje:{puntajes[1]} </label>
          </div>
        </div>
        <button onClick={LanzarDados}>Jugar</button>
      </div>
    </div>
  );
}

export default App;
