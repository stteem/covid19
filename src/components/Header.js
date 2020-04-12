import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';



class Header extends Component {
    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                        COVID-19 Impact Estimator
                        </NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;