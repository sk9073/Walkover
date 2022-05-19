import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{cursor:'pointer'}}>Your works</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/user">
                  <NavLink style={{cursor:'pointer'}}>`Siva's Dashboard`</NavLink>
                </Link>
              </NavItem>

            </React.Fragment>

            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink className="btn btn-primary text-light">Add a Work</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
