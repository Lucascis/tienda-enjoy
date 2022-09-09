import { Link } from 'react-router-dom';
import logo from '../assets/joystick_logo.webp';
import NavbarMenu from './Navbar';

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" className='logo__enlace'>
                    <h1 className="logo__enlace-texto">Tienda Enjoy</h1>
                    <img
                        className="logo__enlace-imagen"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <NavbarMenu />
        </div>
    );
}

export default Header;