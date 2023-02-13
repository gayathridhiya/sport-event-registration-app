import React, { Component } from "react";
import brandLogo from "../../assets/img/BrandLogo.png";
import "./NavBarStyle.css";
import  {connect} from  'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false
        }
    }

    handleClick = () => {
        this.setState(
            (prevState) => ({
                click: !prevState.click
            })
        )
    };
    handleClose = () => {
        this.setState(
            () => ({
                click: false
            })
        )
    };

    render() {
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">inTuit
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
        )
    }
}

const mapStateToProps = state =>{
    return{
        totalSelected:state._todoEvents.totalSelected
    }
}

export default connect(mapStateToProps,null)(NavBarComponent);

