/* eslint-disable jsx-a11y/anchor-is-valid */
import '../scss/_navbar.scss';
import CartWidget from './CartWidget';

const Navbar = () => {

    return (
        <nav className="navbar sticky-top navbar-expand-md">
            <div className="container-fluid">
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
                <div className="collapse navbar-collapse position-relative" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">Inicio</a>
                        </li>
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
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/categorias/auriculares.html"
                                    >Auriculares</a
                                    >
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/categorias/mouse.html"
                                    >Mouse</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/categorias/teclados.html"
                                    >Teclados</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto.html">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;