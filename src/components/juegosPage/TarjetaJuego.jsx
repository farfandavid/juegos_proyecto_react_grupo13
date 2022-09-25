function TarjetaJuego({ titulo, descripcion, imagen }) {
  return (
    <section className="Tarjeta">
      <img className="Imagen-Juego" src={imagen} alt="" />
      <div className="Descripcion">
        <h4>{titulo}</h4>
        <p>{descripcion} </p>
      </div>
    </section>
  );
}

export default TarjetaJuego;