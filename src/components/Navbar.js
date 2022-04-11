/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

const Navbar = () => {

    return (
        <nav className="navbar sticky-top navbar-expand-md position-relative">
            <div className="container-fluid ">
                <div className="navbar-light">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <Link to="/" className="nav-item nav-link">
                            <li >
                                Inicio
                            </li>
                        </Link>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <Link to="/categoria/1" className="dropdown-item">
                                    <li>
                                        Auriculares
                                    </li>
                                </Link>
                                <Link to="/categoria/2" className="dropdown-item">
                                    <li>
                                        Mouse
                                    </li>
                                </Link>
                                <Link to="/categoria/3" className="dropdown-item">
                                    <li>
                                        Teclados
                                    </li>
                                </Link>
                            </ul>
                        </li>
                        <Link to="/" className="nav-item nav-link">
                            <li>
                                Nosotros
                            </li>
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            <li>
                                Contacto
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
}

export default Navbar;