import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget  from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">      
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Boutique del Violero 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/guitarras">Guitarras</Nav.Link>
                        <Nav.Link as={Link} to="/category/amplificadores">Amplificadores</Nav.Link>
                        <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Straps</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Microfonos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cables</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Fundas
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar;
