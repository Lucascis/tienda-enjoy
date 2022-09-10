/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

const NavbarMenu = () => {
    return (
        <Navbar className="navbar" expand="md">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Link aria-label="Ir al inicio de nuestra pagina" href="/">Inicio</Nav.Link>
                        <NavDropdown aria-label="Abrir menu de categorias" title="Categorias" id="basic-navbar-nav" renderMenuOnMount>
                            <NavDropdown.Item aria-label="Categoria de auriculares" href="/categoria/1">Auriculares</NavDropdown.Item>
                            <NavDropdown.Item aria-label="Categoria de mouse" href="/categoria/2">Mouse</NavDropdown.Item>
                            <NavDropdown.Item aria-label="Categoria de teclados" href="/categoria/3">Teclados</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link aria-label="Ir a nosotros para saber sobre nuestra empresa" href="/nosotros">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Nav.Link aria-label="Ir al carrito de compras" href="/cart"><CartWidget /></Nav.Link>
        </Navbar>
    );
};

export default NavbarMenu;
