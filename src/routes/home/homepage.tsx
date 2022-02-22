import { useState }  from 'react';
import "../../App.css";
import {
  Container,
  OverlayTrigger,
  Tooltip,
  InputGroup,
  FormControl,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Login, Signup } from "..";

export function NavbarHome() {
  const [id, setId] = useState<string>("");
  let input_id = "";

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="principal__color" style={{fontWeight: "bold"}}>Project name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="nav__searchBar">
              <OverlayTrigger placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    Search bar optional
                  </Tooltip>
                }
                children={
                  <InputGroup className="d-flex">
                    <Button variant="outline-secondary" className="secondary__cancel__btn__color">
                      <FontAwesomeIcon icon={faSearch} className="secondary__color"/>
                    </Button>
                    <FormControl
                      placeholder="Recherche ..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={id}
                      onChange={(e) => {
                        input_id = e.target.value;
                        setId(e.target.value);
                      }}
                    />
                  </InputGroup>
                }
              ></OverlayTrigger>
            </div>
          </Nav>
            <Signup />
            <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Body() {
  return (
    <>
      
    </>
  );
}
