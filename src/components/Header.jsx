import '../stylesheets/mainPages/css/templatemo-grad-school.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header clearfix" role="header" >
      <div className="logo" >
        <a href="#"><em>grupo</em> 13</a>
      </div >
      <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Juegos">Juegos</Link></li>
          <li className="has-submenu"><Link to="/Developer">Desarrolladores</Link>
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default Header;