import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import NavbarMenu from "../menus/NavbarMenu";

export interface NavBarProps {}

export interface NavBarProps {}

export interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/wordpress/">
          SailHub <span className="text-primary">Sardinia</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Form className="form-inline my-2 my-lg-0">
            <InputGroup>
              <Input
                className="form-control"
                type="search"
                placeholder="Search"
              />
              <InputGroupAddon addonType="append">
                <Button>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <Nav className="ml-auto" navbar>
            <NavbarMenu />
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                How it works
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Destinations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                FAQ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-secondary" href="/components/">
                Become a partner
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
