import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Container, FormControl, Badge } from "react-bootstrap";
import brandLogo from "../assets/img/BrandLogo.png";
import "../styleSheets/GlobalNavBarStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { RxCalendar } from 'react-icons/rx';
import SearchBar from "material-ui-search-bar";
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
                        <Navbar.Text className="search">
                            <SearchBar
                                className="searchBar"
                                placeholder="Search for Sports and Activities"
                                // value={this.state.value}
                                value=""
                                // onChange={(newValue) => this.setState({ value: newValue })}
                                // onRequestSearch={() => doSomethingWith(this.state.value)}
                            />
                        </Navbar.Text>
                    </div>
                    <Nav>
                        <DropdownButton drop="down-centered"
                            title={
                                <span>
                                    <RxCalendar color="white" alignmentBaseline="center" className="mb-1" />
                                    {this.props.totalSelected}
                                </span>
                            }
                            align="end"
                            variant="primary">
                            {/* <RxCalendar >

                            </RxCalendar> */}

                            <Dropdown.Item eventKey="1" href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4" href="#/action-4">Separated link</Dropdown.Item>

                        </DropdownButton>
                    </Nav>
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

