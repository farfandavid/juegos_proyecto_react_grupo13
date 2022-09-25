import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TarjetaJuego from "../components/juegosPage/TarjetaJuego";

function ListarJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetch("json/juegos.json")
      .then(response => response.json())
      .then(datos => {
        setJuegos(datos)
      })
  }, []);
  return juegos;
}

function JuegosPage(params) {
  const juegos = ListarJuegos();
  return (
    <div className="Contenedor-Tarjeta">
      {juegos.map(item => (
        <Link to={item.link} key={item.link}>
          <TarjetaJuego
            key={item.link}
            titulo={item.titulo}
            imagen={item.imagen}
            descripcion={item.descripcion}
          />
        </Link>
      ))}
    </div>
  );
}

export default JuegosPage;