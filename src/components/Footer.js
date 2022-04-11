import logo from '../assets/joystick_logo.webp';

import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__logo">
                <Link to="/" className="footer__logo-enlace">
                    <img
                        className="footer__logo-enlace-imagen"
                        src={logo}
                        alt="logo"
                    />
                    <p className="footer__logo-enlace-texto">
                        Desarrollado por Lucas Cisterna
                    </p>
                </Link>
            </div>
        </footer>
    );

}

export default Footer;