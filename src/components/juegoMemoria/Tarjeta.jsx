import '../../stylesheets/juegoMemoria/tarjeta.css'

function Tarjeta({ elemento, id, handleClick }) {

    const itemClass = elemento.stat ? " activo " + elemento.stat : ""


    return (
        <div className={" tarjeta " + itemClass} onClick={() => handleClick(id)}>
            <img className=" imagenTarjeta " src={elemento.img} alt="" />
        </div>
    )
}
export default Tarjeta;