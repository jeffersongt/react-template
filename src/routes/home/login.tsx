import "../../App.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

import { UserResponse, User } from "../../helper/types";
import { signin } from "..";

export function ShowLogin() {
  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [actualEmail, setEmail] = useState<string>("");
  const [actualPasswd, setPasswd] = useState<string>("");
  const input_user: UserResponse = { id: "", email: "", password: ""};

  return (
    <>
      <Button
        variant="outline-primary"
        className="loginButton"
        onClick={handleShow}
      >
        Signin
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signin</Modal.Title>
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
            <Button
              variant="primary"
              onClick={async () => {
                const params : User = { email : actualEmail, password : actualPasswd };
                const result = await signin(params);
                if (result !== "") {
                  handleClose();
                  setEmail("");
                  setPasswd("");
                  navigate("/WHERE_YOU_DESIRE_WHEN_LOGGED");
                }
              }}
            >
              Signin
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
