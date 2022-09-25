import {useState} from 'react'
import Tarjeta from './Tarjeta.js'
import './stylesheets/tarjetas.css'

function Tarjetas(){

    const [elementos, setElementos] = useState([
        { id: 1, img: '/img/circulo.png', stat: "" },
        { id: 1, img: '/img/circulo.png', stat: "" },
        { id: 2, img: '/img/craneo.png', stat: "" },
        { id: 2, img: '/img/craneo.png', stat: "" },
        { id: 3, img: '/img/decagono.png', stat: "" },
        { id: 3, img: '/img/decagono.png', stat: "" },
        { id: 4, img: '/img/octaedro.png', stat: "" },
        { id: 4, img: '/img/octaedro.png', stat: "" },
        { id: 5, img: '/img/piramide.png', stat: "" },
        { id: 5, img: '/img/piramide.png', stat: "" },
        { id: 6, img: '/img/triangulo.png', stat: "" },
        { id: 6, img: '/img/triangulo.png', stat: "" },
        { id: 7, img: '/img/xd.png', stat: "" },
        { id: 7, img: '/img/xd.png', stat: "" },
        { id: 8, img: '/img/rectangulo.png', stat: "" },
        { id: 8, img: '/img/rectangulo.png', stat: "" }

    ].sort(() => Math.random() - 0.3))

    const [elementoPrevio, setElementoPrevio] = useState(-1)

    function chequear(actual){
        if(elementos[actual].id === elementos[elementoPrevio].id){
            elementos[actual].stat = "correcta"
            elementos[elementoPrevio].stat = "correcta"
            setElementoPrevio(-1)
        }else{
            elementos[actual].stat = "incorrecta"
            elementos[elementoPrevio].stat = "incorrecta"
            setElementos([...elementos])
            setTimeout(() => {
                elementos[actual].stat = ""
                elementos[elementoPrevio].stat = ""
                setElementos([...elementos])
                setElementoPrevio(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(elementoPrevio === -1){
            elementos[id].stat = "activo"
            setElementos([...elementos])
            setElementoPrevio(id)
        }else{
            chequear(id)
        }

    }
     
        

     return(
            <div className='container'>
                { elementos.map((elemento, index) => (
                    <Tarjeta key={index} id={index} elemento={elemento} handleClick={handleClick}  />
                )) }
            </div>
        )
}
export default Tarjetas;