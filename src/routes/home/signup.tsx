import { useState } from 'react';
import '../../App.css';
import { Modal, Button, Form, OverlayTrigger, Tooltip, FloatingLabel } from 'react-bootstrap';

import { UserResponse, User } from '../../helper/types';
import { signup } from '..';

export function Signup() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [Username, setUsername] = useState<string>('');
  const inputUser: UserResponse = { id: '', email: '', password: '', username: '' };

  return (
    <>
      <Button variant="outline-primary" className="secondary__confirm__btn__color"style={{ marginRight: '1rem' }} onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control
                required
                type="text" value={Email}
                onChange={(e) => {
                  inputUser.email = e.target.value;
                  setEmail(e.target.value);
                }}
              />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
              <Form.Control
                required
                type="text" value={Username}
                onChange={(e) => {
                  inputUser.username = e.target.value;
                  setUsername(e.target.value);
                }}
              />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              <Form.Control
                required
                type="password" value={Password}
                onChange={(e) => {
                  inputUser.password = e.target.value;
                  setPassword(e.target.value);
                }}
              />
              </FloatingLabel>
            </Form.Group>

            <Button variant="primary" className="principal__confirm__btn__color"
              onClick={async () => {
                const params : User = { email: Email, password: Password, username: Username };
                if (params.password.length < 8) {
                  alert('Password should contain at least 8 characters.');
                  return;
                }
                const result = await signup(params);
                if (result === true) {
                  handleClose();
                  setEmail('');
                  setPassword('');
                }
              }}
            >
              Signup
            </Button>
            <Button variant="primary" style={{ marginLeft: '1rem' }} className="principal__cancel__btn__color" onClick={handleClose}>
              Cancel
            </Button>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a style={{ opacity: 0.8 }}>*Enterprise Name* Enterprise</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
