import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import brandLogo from "../../assets/img/BrandLogo.png";
import "./NavBarStyle.css";
import  {connect} from  'react-redux';

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
        const click = this.state.click;
        return (
            <Navbar>
                <Container style={{ height: 50 }}>
                    <div className="innerContainer">
                        <Navbar.Brand className="brand mt-1">
                            <Link to="/">
                            <img src={brandLogo} alt="Intuit"></img>
                            </Link>
                            {/* <a >Event Scheduler</a> */}
                        </Navbar.Brand>
                    
                    </div>
                   
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

