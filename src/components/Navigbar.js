
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';

function Navigbar(props){
    return(
        <>
             <Navbar bg={props.mode} variant={props.mode} expand="lg">
      <Container>
        <Link className='navbar-brand' to="/">{props.title}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
      <Form.Check 
      className={props.mode}
        type="switch"
        id="custom-switch"
        variant='light'
        label="Enable dark mode"
        onClick={props.toggleMode}
      />
    </Form>
      </Container>
    </Navbar>
    
        </>
    )
}

Navigbar.propTypes={ title:PropTypes.string}

Navigbar.defaultProps={
  title:"Add text"
}


export default Navigbar;