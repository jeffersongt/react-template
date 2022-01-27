import { useState }  from 'react';
import "../../App.css";
import { Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import { UserResponse, User } from "../../helper/types";
import { signup } from "..";

export function ShowSignup() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [actualEmail, setEmail] = useState<string>("");
  const [actualPasswd, setPasswd] = useState<string>("");
  const input_user: UserResponse = { id: "", email: "", password: "" };

  return (
    <>
      <Button variant="light" className="signupButton" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="xxx.xxx@gmail.com"
                id="emailLOG"
                value={actualEmail}
                onChange={(e) => {
                  input_user.email = e.target.value;
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip-2">
                  Password should contain at least 8 characters
                </Tooltip>
              }
              children={
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    id="passwdLOG"
                    value={actualPasswd}
                    onChange={(e) => {
                      input_user.password = e.target.value;
                      setPasswd(e.target.value);
                    }}
                  />
                </Form.Group>
              }
            ></OverlayTrigger>
            <Button
              variant="primary"
              onClick={async () => {
                const params : User = { email : actualEmail, password : actualPasswd };
                const result = await signup(params);
                if (result === true) {
                  handleClose();
                  setEmail("");
                  setPasswd("");
                }
              }}
            >
              Signup
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a style={{ opacity: 0.8 }}>*Project Name* Enterprise</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
