import '../scss/_header.scss';
import logo from '../assets/joystick_logo.webp';
import Navbar from './Navbar';

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <a className="logo__enlace" href="/index.html">
                    <h1 className="logo__enlace-texto">Tienda Enjoy</h1>
                    <img
                        className="logo__enlace-imagen"
                        src={logo}
                        alt="logo"
                    />
                </a>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;