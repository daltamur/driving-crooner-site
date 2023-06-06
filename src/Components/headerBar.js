import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from './../img/favicon.jpg'

function HeaderBar(){
return(
  <div className="headerBar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Navbar.Brand href="#home" style={{marginLeft: '1%'}}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Driving Crooner Logo"
          />
          {' '} {' '} The Driving Crooner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '1%'}}>
          <Nav className="ms-auto">
            <Nav.Link href="#features">Find the Crooner</Nav.Link>
            <Nav.Link href="#pricing">Become a Crooner</Nav.Link>
            <Nav.Link href="#pricing">About the Crooner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default HeaderBar;