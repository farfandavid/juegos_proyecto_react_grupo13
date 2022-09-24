function Tarjeta({item, id, handleClick}) {
    return(
        <div className="tarjeta">
            <img className="imagenTarjeta" src ={item.img} alt="" />
        </div>
    )
}
export default Tarjeta;