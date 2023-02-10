import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import GlobalNavBarComponent from "./GlobalNavBarComponent";

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
            <>
            
                <div className={this.click ? "main-container" : ""} onClick={() => this.handleClose()} />
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            CodeBucks
                            <i className="fa fa-code"></i>
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? () => this.handleClick() : null}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? () => this.handleClick() : null}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? () => this.handleClick() : null}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? () => this.handleClick() : null}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={() => this.handleClick()}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
                
            
            </>
        )
    }
}

export default NavBarComponent;

