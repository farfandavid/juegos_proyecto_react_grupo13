import './Image.css'
import PapelImg from './papel.png';
import PiedraImg from './piedra.png'
import TijeraImg from './tijera.png';

function ImgJuego({ imagen }) {

  let valor = (a) => {
    if (a === 1) {
      return PapelImg;
    } else if (a === 2) {
      return PiedraImg;
    } else {
      return TijeraImg;
    }
  }

  return (
    <>
      <img src={valor(imagen)} alt='Papel' className='ImgJuego' />
    </>
  );
}

export default ImgJuego;