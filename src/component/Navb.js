import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const Nabv = () => {
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>

            <Navbar.Brand className='font-weight-bolder text-white'>
                <i class="fa-solid fa-cubes fa-2xl me-2 ms-2"></i>
                CRUD
            </Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link
                    className='font-weight-bolder text-white'
                    to='/list'
                    as={Link}
                >
                    List
                </Nav.Link>
                <Nav.Link
                    className='font-weight-bolder text-white'
                    to='/create'
                    as={Link}
                >
                    Create
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Nabv;