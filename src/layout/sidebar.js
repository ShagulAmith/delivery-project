import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo_brand from '../assets/img/logo_brand.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faCubes, faUserCog, faBagShopping, faChartPie, faFileLines, faLandmark, faRightFromBracket, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapse: false,
        }
    }
    handleSidebar = () => {
        this.setState(prevState => ({
            sidebarCollapse: !prevState.sidebarCollapse
        }), () => {
            if (this.state.sidebarCollapse) {
                document.body.classList.add('sidebar-collapsed');
            } else {
                document.body.classList.remove('sidebar-collapsed');
            }
        });
    }
    render() {
        const { sidebarCollapse } = this.state;
        return (
            <aside className={sidebarCollapse ? "app-sidebar sidebar-collapsed" : "app-sidebar"}>
                <div className="app-sidebar__top">
                    <a className="brand-logo" href="#">
                        <img src={logo_brand} alt="brand-logo" />
                    </a>
                    <span id="dock-to-left"
                        class="sidebar-toggler"
                        onClick={this.handleSidebar}
                    >
                        <i><FontAwesomeIcon icon={faArrowLeftLong} /></i>
                    </span>
                </div>
                <div className="app-sidebar__content">
                    <div className="app-sidebar__menu">
                        <div className="app-sidebar__menu-title">
                            <h6 className="caption">Pages</h6>
                        </div>
                        <div className="app-sidebar__menu-list">
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faUserShield} /></i>
                                <span className="menu-label">Authentication</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faCubes} /></i>
                                <span className="menu-label">Dashboard</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faUserCog} /></i>
                                <span className="menu-label">Profile Update</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faBagShopping} /></i>
                                <span className="menu-label">Upgrade Plan</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faChartPie} /></i>
                                <span className="menu-label">User Management</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faLandmark} /></i>
                                <span className="menu-label">Blog</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faFileLines} /></i>
                                <span className="menu-label">Documentation</span>
                            </div>
                        </div>
                    </div>
                    <div className="app-sidebar__menu">
                        <div className="app-sidebar__menu-title">
                            <h6 className="caption">Toolbar</h6>
                        </div>
                        <div className="app-sidebar__menu-list">
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faUserShield} /></i>
                                <span className="menu-label">Authentication</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faCubes} /></i>
                                <span className="menu-label">Dashboard</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faUserCog} /></i>
                                <span className="menu-label">Profile Update</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faBagShopping} /></i>
                                <span className="menu-label">Upgrade Plan</span>
                            </div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faChartPie} /></i>
                                <span className="menu-label">User Management</span>
                            </div>
                        </div>
                    </div>
                    <div className="app-sidebar__menu">
                        <div className="app-sidebar__menu-list">
                            <div className="menu-divider"></div>
                            <div className="app-sidebar__menu-item">
                                <i className="menu-icon"><FontAwesomeIcon icon={faRightFromBracket} /></i>
                                <span className="menu-label">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}