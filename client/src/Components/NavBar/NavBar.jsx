import {Container, Nav, Navbar, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = props =>{


    return (
        <>
            <Navbar bg={props.mode} variant={props.mode} expand="lg" >
                <Container >
                    <Navbar.Brand as={Link} to="/" >Shoppig Card</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link}  to="/" >Home</Nav.Link>
                                <Nav.Link as={Link}  to="/shop" >Shop</Nav.Link>
                                <Nav.Link as={Link}  to="/about" >About</Nav.Link>
                                <Nav.Link as={Link} to="/contact"  >Contact</Nav.Link>
                                {/*<Nav.Link as={Link} to="/about">About</Nav.Link>*/}
                            </Nav>
                        <div className={`d-flex text-${(props.mode==="light")?"dark":"light"}`}>
                            <Form.Check className="ms-lg-4" type="switch" id="custom-switch" label={`${(props.mode==="light")?"dark":"light"} mode`}  onClick={props.toggleMode} />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;