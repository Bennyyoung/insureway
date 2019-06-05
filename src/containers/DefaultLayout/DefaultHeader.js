import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />

        <AppNavbarBrand>
          <h3>InsureWAY</h3>
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="md" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/payment" className="nav-link">Payments / Insurance Types</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/Login" className="nav-link">Sign Up</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/Login" className="nav-link">Login</NavLink>
          </NavItem>
        
          <AppHeaderDropdown direction="down" mobile>
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
