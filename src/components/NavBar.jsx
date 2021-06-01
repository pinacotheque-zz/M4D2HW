
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = (props) =>  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                       
                        <Navbar.Brand href="#home">Bookstore.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Books</Nav.Link>
                                <Nav.Link href="#">Catagories</Nav.Link> 
                                <Nav.Link href="#">Browse</Nav.Link>
                            </Nav>                   
                        </Navbar.Collapse>
                     </Navbar>

export default NavBar