
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
const Nabv = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <i class="fa-solid fa-cubes fa-2xl me-2 ms-2"></i>
                <Navbar.Brand>CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/list'
                            as={Link} >List</Nav.Link>
                        <Nav.Link to='/create'
                            as={Link}>create</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nabv;