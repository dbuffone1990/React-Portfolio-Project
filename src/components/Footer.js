import React, { useState, Component } from 'react';
import { Button } from 'reactstrap';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="container-fluid site-footer mt-5">
                <div className="row justify-content-center">
                    <a href="https://www.facebook.com/DANIELLESCUSTOMCREATION/?ref=page_internal" target="_blank">
                        <FaFacebookF className="icon mt-2 mb-2"/>
                    </a>
                    <a href="https://www.instagram.com/danielles_creations_123/" target="_blank">
                        <FaInstagram className="icon mt-2 mb-2 ml-4"/>
                    </a>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
