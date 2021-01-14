import React, { useState, Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header= (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
            <Navbar className="navbar navbar-expand-md navbar-light sticky-top">
                <div className="container">
                    <h1>Danielle's Cutsom Creations</h1>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-collapse justify-content-end" navbar>
                        <NavItem>
                        <NavLink href="#"> Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#"> About</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#"> Design</NavLink>
                        </NavItem>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
  }


export default Header;


// return (
//     <div>
        // <Nav className="navbar navbar-expand-md navbar-light sticky-top">
        //     <div className="container">
        //         <h1>Danielle's Cutsom Creations</h1>
        //         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        //         <div className="collapse navbar-collapse" id="daniellesNavbar">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item active"><a className="nav-link" href="#"> Home</a></li>
        //                 <li className="nav-item"><a className="nav-link" href="#"> About</a></li>
        //                 <li className="nav-item"><a className="nav-link" href="#"> Design</a></li>
        //                 <li className="nav-item mt-2 ml-1">
        //                 <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                     <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        //                 </svg>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </Nav>
        // <button className="navbar-toggler col-10" type="button" data-toggle="collapse" data-target="#daniellesNavbar">
        //     <span className="navbar-toggler-icon"></span>
        // </button>
//     </div>
// );