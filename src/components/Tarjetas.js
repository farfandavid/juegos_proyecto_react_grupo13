import {useState} from 'react'
import Tarjeta from './Tarjeta'

function Tarjetas(){

    const [items, seItems] = useState([
        { id: 1, img: '../img/circulo.png', stat: "" },
        { id: 1, img: '../img/circulo.png', stat: "" },
        { id: 2, img: '../img/craneo.png', stat: "" },
        { id: 2, img: '../img/craneo.png', stat: "" },
        { id: 3, img: '../img/decagono.png', stat: "" },
        { id: 3, img: '../img/decagono.png', stat: "" },
        { id: 4, img: '../img/octaedro.png', stat: "" },
        { id: 4, img: '../img/octaedro.png', stat: "" },
        { id: 5, img: '../img/piramide.png', stat: "" },
        { id: 5, img: '../img/piramide.png', stat: "" },
        { id: 6, img: '../img/triangulo.png', stat: "" },
        { id: 6, img: '../img/triangulo.png', stat: "" },
        { id: 7, img: '../img/xd.png', stat: "" },
        { id: 7, img: '../img/xd.png', stat: "" },
        { id: 8, img: '../img/rectangulo.png', stat: "" },
        { id: 8, img: '../img/rectangulo.png', stat: "" }

    ])

    return(
        <div className='container'>
            {items.map(item => (
              <Tarjeta/>
            ) )
            }
        </div>
    )
}
export default Tarjetas;