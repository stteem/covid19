import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
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