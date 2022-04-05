import '../scss/_footer.scss';
import logo from '../assets/joystick_logo.webp';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__logo">
                <a className="footer__logo-enlace" href="/index.html">
                    <img
                        className="footer__logo-enlace-imagen"
                        src={logo}
                        alt="logo"
                    />
                    <p className="footer__logo-enlace-texto">
                        Desarrollado por Lucas Cisterna
                    </p>
                </a>
            </div>
        </footer>
    );

}

export default Footer;