import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logo_brand from '../assets/img/logo_brand.svg';
import icon_user_avatar from '../assets/img/icons/icon_user-avatar.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear, faCircleQuestion, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
    render() {
        return (
            <header class="app-header">
                <div class="app-header-container">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand>
                            <img src={logo_brand} alt="brand-logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <div className="app-header__main">
                            <div className="app-header__left">
                            </div>
                            <div className="app-header__right">
                                <div className="app-header__topbar">
                                    <div className="app-header__topbar-item">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                <span className="user-avatar">
                                                    <img src={icon_user_avatar} alt="user avatar" />
                                                </span>
                                                <span className="user-name">Admin</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"><i><FontAwesomeIcon icon={faGear} /></i>Settings</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2"><i><FontAwesomeIcon icon={faCircleQuestion} /></i>Help & FAQ</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3"><i><FontAwesomeIcon icon={faRightFromBracket} /></i>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Navbar>
                </div>
            </header>
        )
    }
}