import './App.css';
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Become from './Components/Become'
import Find from './Components/Find'
import './styles/styles.css'
import { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from './img/favicon.jpg'
import uuid from 'react-uuid';

function App() {
  const [chosenComponent, setChosenComponent] = useState('Landing Page');
  const components = ['Find the Crooner', 'Become a Crooner', 'About the Crooner'];

  return (
    <div className="App" style={{height: '100vh'}}>
        <Navbar  expand="lg" bg="dark" variant="dark" className={'stick-nav'}>
          <Navbar.Brand style={{marginLeft: '1%', cursor: 'pointer'}} onClick={() => setChosenComponent('Landing Page')}>
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
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{marginRight: '1%'}}>
            <Nav>
              {components.map((name) =>(
                <Nav.Item
                  key={uuid()}
                >
                  <Nav.Link onClick={() => setChosenComponent(name)}>{name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className="contentBody">
        {chosenComponent === 'Landing Page' && <LandingPage/>}
        {chosenComponent === 'Find the Crooner' && <Find/>}
        {chosenComponent === 'Become a Crooner' && <Become/>}
        {chosenComponent === 'About the Crooner' && <About/>}
      </div>
    </div>
  );
}

export default App;
